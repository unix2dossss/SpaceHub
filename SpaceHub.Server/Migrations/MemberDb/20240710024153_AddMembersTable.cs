using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceHub.Server.Migrations.MemberDb
{
    /// <inheritdoc />
    public partial class AddMembersTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    StudentID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Pronouns = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UPI = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Major = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SemesterPlan = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PayOffline = table.Column<bool>(type: "bit", nullable: false),
                    StudySerialized = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.StudentID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");
        }
    }
}
