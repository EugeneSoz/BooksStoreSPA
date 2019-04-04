using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksStoreSPA.Migrations
{
    public partial class RequiredPublisherCountry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Publishers",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Publishers",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
