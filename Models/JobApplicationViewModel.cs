using Microsoft.AspNetCore.Http;

namespace SkilNexa.Models
{
    public class JobApplicationViewModel
    {
        public string? JobTitle { get; set; }
        public string? CompanyName { get; set; }
        public string? CandidateName { get; set; }
        public string? Email { get; set; }
        public IFormFile? Resume { get; set; } // ફાઈલ અપલોડ માટે
    }
}