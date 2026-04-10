using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SkilNexa.Models;

namespace SkilNexa.Controllers
{
public class AccountController : Controller
{
    // 1. રજીસ્ટ્રેશન પેજ બતાવવા માટે
    [HttpGet]
    public IActionResult EmployerRegister()
    {
        return View();
    }

    // 2. ફોર્મ સબમિટ થાય ત્યારે ડેટા હેન્ડલ કરવા માટે
    [HttpPost]
    public async Task<IActionResult> EmployerRegister(IFormCollection data)
    {
        // અહીં તમારું Database Logic આવશે
        // ઉદાહરણ તરીકે: var companyName = data["CompanyName"];
        
        return RedirectToAction("EmployerDashboard"); // સક્સેસ થયા પછી ડેશબોર્ડ પર
    }
}
}