using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceHub.Server.Migrations.ExecutiveDb
{
    /// <inheritdoc />
    public partial class CreateExecProper : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Executives",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "StudentID",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "Major",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "PayOffline",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "Pronouns",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "SemesterPlan",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "UPI",
                table: "Executives");

            migrationBuilder.RenameColumn(
                name: "StudySerialized",
                table: "Executives",
                newName: "ExecLinkedInLink");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Executives",
                newName: "ExecRole");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Executives",
                newName: "ExecFavObject");

            migrationBuilder.AddColumn<string>(
                name: "ExecName",
                table: "Executives",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Executives",
                table: "Executives",
                column: "ExecName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Executives",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "ExecName",
                table: "Executives");

            migrationBuilder.RenameColumn(
                name: "ExecRole",
                table: "Executives",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "ExecLinkedInLink",
                table: "Executives",
                newName: "StudySerialized");

            migrationBuilder.RenameColumn(
                name: "ExecFavObject",
                table: "Executives",
                newName: "FirstName");

            migrationBuilder.AddColumn<string>(
                name: "StudentID",
                table: "Executives",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Executives",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Major",
                table: "Executives",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Paid",
                table: "Executives",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "PayOffline",
                table: "Executives",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Pronouns",
                table: "Executives",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SemesterPlan",
                table: "Executives",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UPI",
                table: "Executives",
                type: "nvarchar(8)",
                maxLength: 8,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Executives",
                table: "Executives",
                column: "StudentID");
        }
    }
}
