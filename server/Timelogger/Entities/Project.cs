using System.ComponentModel.DataAnnotations;

namespace Timelogger.Entities
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int TimeSpent { get; set; }
        public string Comment { get; set; }
    }
}
