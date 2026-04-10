using Microsoft.AspNetCore.Http;

namespace SkilNexa.Models
{
    public class InternshipApplication
    {
        public string? InternRole { get; set; }
        public string? PartnerName { get; set; }
        public string? StudentName { get; set; }
        public string? Email { get; set; } // College Name ની જગ્યાએ Email
        public IFormFile? Resume { get; set; }
    }
}