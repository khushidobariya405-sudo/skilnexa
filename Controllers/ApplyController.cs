using Microsoft.AspNetCore.Mvc;
using SkilNexa.Models;
using System.IO;

namespace SkilNexa.Controllers
{
    public class ApplyController : Controller
    {
        // GET: /Apply/Index
        public IActionResult Index(string jobTitle, string companyName)
        {
            var model = new JobApplicationViewModel 
            { 
                JobTitle = jobTitle, 
                CompanyName = companyName 
            };
            return View(model);
        }

        // POST: /Apply/Submit
        [HttpPost]
        public async Task<IActionResult> Submit(JobApplicationViewModel model)
        {
            if (model.Resume != null)
            {
                string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                string filePath = Path.Combine(folderPath, model.Resume.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.Resume.CopyToAsync(stream);
                }
            }

            // ફેરફાર અહીં છે: હવે "Index" વ્યૂ બતાવવાને બદલે "PostApply" પેજ પર જશે
            return RedirectToAction("PostApply", new { jobTitle = model.JobTitle, company = model.CompanyName });
        }

        // નવું એક્શન: સબમિટ કર્યા પછી ૨ ઓપ્શન બતાવવા માટે
        public IActionResult PostApply(string jobTitle, string company)
        {
            ViewBag.JobTitle = jobTitle;
            ViewBag.Company = company;
            return View();
        }

        // નવું એક્શન: લાઈવ ટ્રેકિંગ સ્ટેટસ જોવા માટે
        public IActionResult TrackStatus()
        {
            return View();
        }
    }
}