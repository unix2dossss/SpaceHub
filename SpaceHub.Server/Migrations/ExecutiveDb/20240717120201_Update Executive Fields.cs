using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceHub.Server.Migrations.ExecutiveDb
{
    /// <inheritdoc />
    public partial class UpdateExecutiveFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Executives",
                table: "Executives");

            migrationBuilder.AddColumn<int>(
                name: "ExecId",
                table: "Executives",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Executives",
                table: "Executives",
                column: "ExecId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Executives",
                table: "Executives");

            migrationBuilder.DropColumn(
                name: "ExecId",
                table: "Executives");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Executives",
                table: "Executives",
                column: "ExecName");
        }
    }
}
