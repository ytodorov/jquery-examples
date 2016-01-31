using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace Jquery_ExamplesWebsite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //[HttpPost]
        public ActionResult GetJqueryData(string jurl)
        {
            HttpClient client = new HttpClient();
            var res = client.GetStringAsync("http://api.jquery.com/add/#add-selector").Result;

           var json = Json(res);
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;

            return json;
        }
    }
}