﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SpaceHub.Server.Data;

#nullable disable

namespace SpaceHub.Server.Migrations.EventDb
{
    [DbContext(typeof(EventDbContext))]
    [Migration("20240716073731_Add DateTime EventDateTime & EventEndTime")]
    partial class AddDateTimeEventDateTimeEventEndTime
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SpaceHub.Server.Models.Event", b =>
                {
                    b.Property<string>("EventName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("EventCardBG")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EventCatergory")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EventDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("EventDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EventEndTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("EventLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EventName");

                    b.ToTable("Events");
                });
#pragma warning restore 612, 618
        }
    }
}
