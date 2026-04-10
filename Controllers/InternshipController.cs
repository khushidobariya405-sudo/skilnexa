using Microsoft.AspNetCore.Mvc;
using SkilNexa.Models;
using System.IO;

namespace SkilNexa.Controllers
{
    public class InternshipController : Controller
    {
        // ૧. ઇન્ટર્નશીપ લિસ્ટ બતાવવા માટે
        public IActionResult List()
        {
            return View();
        }

        // ૨. એપ્લાય કરવાનું ફોર્મ બતાવવા માટે (Apply Page)
        public IActionResult Apply(string role, string partner)
        {
            var model = new InternshipApplication 
            { 
                InternRole = role, 
                PartnerName = partner 
            };
            return View(model);
        }

        // ૩. ફોર્મ સબમિટ કરવાનું અને રિઝ્યુમ સેવ કરવાનું લોજિક
        [HttpPost]
        public async Task<IActionResult> SubmitInternship(InternshipApplication model)
        {
            if (model.Resume != null)
            {
                // ઇન્ટર્નશીપ માટે અલગ 'internships' ફોલ્ડર
                string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "internships");

                // જો ફોલ્ડર ના હોય તો બનાવી દેશે
                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                // ફાઈલનું નામ સુરક્ષિત બનાવવા માટે GUID વાપર્યું છે
                string fileName = Guid.NewGuid().ToString() + "_" + model.Resume.FileName;
                string filePath = Path.Combine(folderPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.Resume.CopyToAsync(stream);
                }
            }

            // સબમિટ થયા પછી સીધું ટ્રેકિંગ પેજ પર રીડાયરેક્ટ કરશે
            return RedirectToAction("TrackStatus");
        }

        // ૪. ટ્રેકિંગ પેજ બતાવવા માટે
        public IActionResult TrackStatus()
        {
            return View();
        }
    }
}