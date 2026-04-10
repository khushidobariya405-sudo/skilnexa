using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SkilNexa.Models; // આ લાઇન અત્યંત મહત્વની છે

namespace SkilNexa.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // -------- PAGE FOR EMPLOYERS TO HIRE CANDIDATES --------
        public IActionResult Employer()
        {
            ViewData["Title"] = "Hire Candidates - Skilnexa";
            return View();
        }

        // રજીસ્ટ્રેશન પેજ બતાવવા માટે
        public IActionResult EmployerRegister()
        {
            return View();
        }

        public IActionResult Internship()
        {
            return View();
        }

        public IActionResult InternshipList()
        {
            // ભવિષ્યમાં અહીં ડેટાબેઝમાંથી લિસ્ટ આવશે
            return View();
        }

        // આ મેથડ StudentOnboarding.cshtml પેજને લોડ કરશે
        public IActionResult StudentOnboarding()
        {
            return View();
        }

        // ફોર્મનો ડેટા સબમિટ કરવા માટે
        [HttpPost]
        public IActionResult SubmitRegistration(string UserStatus, string Organization, string Email, string Phone, string Bio)
        {
            // પ્રોફાઈલ ક્રિએટ થયા પછી યુઝરને Discovery પેજ પર મોકલો
            return RedirectToAction("Discovery");
        }

        [HttpPost]
        public IActionResult SubmitStudentData(string CollegeName, string Role, string StipendType, string Availability)
        {
            // StipendType ના આધારે રિડાયરેક્ટ કરો
            return RedirectToAction("InternshipList", new { type = StipendType });
        }

        public IActionResult Discovery()
        {
            // અહીં કંપનીઓનું લિસ્ટ તૈયાર કર્યું છે
            var companies = new List<CandidateDiscoveryViewModel>
            {
                new CandidateDiscoveryViewModel { Name = "Web Development Intern", Type = "Office", Category = "Skilnexa Partner 1" },
        new CandidateDiscoveryViewModel { Name = "Frontend Developer", Type = "Remote", Category = "Skilnexa Partner 2" },
        new CandidateDiscoveryViewModel { Name = "UI/UX Designer", Type = "Office", Category = "Skilnexa Partner 3" },
        new CandidateDiscoveryViewModel { Name = "Backend Developer", Type = "Remote", Category = "Skilnexa Partner 4" },
        new CandidateDiscoveryViewModel { Name = "Full Stack Intern", Type = "Office", Category = "Skilnexa Partner 5" },
        new CandidateDiscoveryViewModel { Name = "App Developer", Type = "Remote", Category = "Skilnexa Partner 6" },
        new CandidateDiscoveryViewModel { Name = "Graphics Designer", Type = "Office", Category = "Skilnexa Partner 7" },
        new CandidateDiscoveryViewModel { Name = "Software Engineer", Type = "Remote", Category = "Skilnexa Partner 8" },
        new CandidateDiscoveryViewModel { Name = "Data Analyst Intern", Type = "Office", Category = "Skilnexa Partner 9" },
        new CandidateDiscoveryViewModel { Name = "Cloud Intern", Type = "Remote", Category = "Skilnexa Partner 10" },
        new CandidateDiscoveryViewModel { Name = "Python Developer", Type = "Office", Category = "Skilnexa Partner 11" },
        new CandidateDiscoveryViewModel { Name = "DevOps Intern", Type = "Remote", Category = "Skilnexa Partner 12" }
            };

            return View(companies);
        }

        // -------- COMPANY PAGES (FOR CLICKABLE SCROLL IMAGES) --------
        public IActionResult Company1() { return View(); }
        public IActionResult Company2() { return View(); }
        public IActionResult Company3() { return View(); }
        public IActionResult Company4() { return View(); }
        public IActionResult Company5() { return View(); }
        public IActionResult Company6() { return View(); }
        public IActionResult Company7() { return View(); }
        public IActionResult Company8() { return View(); }
        public IActionResult Company9() { return View(); }
        public IActionResult Company10() { return View(); }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }
}