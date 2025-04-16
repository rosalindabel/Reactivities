using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

//DBContext comes from namespace of EntityFrameworkCore (Logical locations)
// Add : derive from DBContext class
public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }
}
