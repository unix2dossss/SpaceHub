using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceHub.Server.Migrations.EventDb
{
    /// <inheritdoc />
    public partial class UpdateEventTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventPast",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "EventTime",
                table: "Events",
                newName: "EventEndTime");

            migrationBuilder.AddColumn<string>(
                name: "EventDateTime",
                table: "Events",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventDateTime",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "EventEndTime",
                table: "Events",
                newName: "EventTime");

            migrationBuilder.AddColumn<bool>(
                name: "EventPast",
                table: "Events",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
