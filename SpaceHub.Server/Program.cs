using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SpaceHub.Server.Data;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("ApplicationDbContextConnection") ?? throw new InvalidOperationException("Connection string 'ApplicationDbContextConnection' not found.");

// DbContext for Auth Endpoints
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
// DbContext for Members
builder.Services.AddDbContext<MemberDbContext>(options => options.UseSqlServer(connectionString,
    options => options.EnableRetryOnFailure(
                    maxRetryCount: 10,
                    maxRetryDelay: System.TimeSpan.FromSeconds(30),
                    errorNumbersToAdd: null)
                )
    );
// DbContext for Executives
builder.Services.AddDbContext<ExecutiveDbContext>(options => options.UseSqlServer(connectionString,
    options => options.EnableRetryOnFailure(
                    maxRetryCount: 10,
                    maxRetryDelay: System.TimeSpan.FromSeconds(30),
                    errorNumbersToAdd: null)
                )
    );

builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.MapIdentityApi<ApplicationUser>();

app.MapPost("/logout", async (SignInManager<ApplicationUser> signInManager) =>
{

    await signInManager.SignOutAsync();
    return Results.Ok();

}).RequireAuthorization();


app.MapGet("/pingauth", (ClaimsPrincipal user) =>
{
    var email = user.FindFirstValue(ClaimTypes.Email); // get the user's email from the claim
    return Results.Json(new { Email = email }); ; // return the email as a plain text response
}).RequireAuthorization();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
