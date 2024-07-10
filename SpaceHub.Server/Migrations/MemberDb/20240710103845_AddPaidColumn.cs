using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceHub.Server.Migrations.MemberDb
{
    /// <inheritdoc />
    public partial class AddPaidColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Paid",
                table: "Members",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Members");
        }
    }
}
