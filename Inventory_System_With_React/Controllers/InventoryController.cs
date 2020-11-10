using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_System_With_React.Models;
using Inventory_System_With_React.Models.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Inventory_System_With_React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpPost("Create")]
        public ActionResult<Product> ProductCreate_POST(string id, string name, string discontinue, string quantity)
        {
            ActionResult<Product> result;
            try
            {
                result = new ProductController().CreateProduct(id, name, discontinue, quantity);
            }
            catch (ValidationException e)
            {
                string error = "Error(s) During Creation: " +
                    e.ValidationExceptions.Select(x => x.Message)
                    .Aggregate((x, y) => x + ", " + y);

                result = BadRequest(error);
            }
            catch (Exception e)
            {
                result = StatusCode(500, "Unknown error occurred, please try again later.");
            }
            return result;

        }
        [HttpPatch("Discontinue")]
        public ActionResult<Product> DiscontinueProductByID_PATCH(string id)
        {
            ActionResult<Product> result;
            try
            {
                result = new ProductController().DiscontinueProductByID(id);
            }
            catch (ValidationException e)
            {
                string error = "Error(s) During Discontinuing... " +
                    e.ValidationExceptions.Select(x => x.Message)
                    .Aggregate((x, y) => x + ", " + y);

                result = BadRequest(error);
            }
            catch (Exception e)
            {
                result = StatusCode(500, "Unknown error occurred, please try again later.");
            }
            return result;


        }
        [HttpPatch("Receive")]
        public ActionResult<Product> ReceiveProductByID_PATCH(string id, string quantity)
        {
            ActionResult<Product> result;
            try
            {
                result = new ProductController().ReceiveProductByID(id, quantity);
            }
            catch (ValidationException e)
            {
                string error = "Error(s) During Receiving Product... " +
                    e.ValidationExceptions.Select(x => x.Message)
                    .Aggregate((x, y) => x + ", " + y);

                result = BadRequest(error);
            }
            catch (Exception e)
            {
                result = StatusCode(500, "Unknown error occurred, please try again later.");
            }
            return result;


        }
        [HttpPatch("Send")]
        public ActionResult<Product> SendProductByID_PATCH(string id, string quantity)
        {
            ActionResult<Product> result;
            try
            {
                result = new ProductController().SendProductByID(id, quantity);
            }
            catch (ValidationException e)
            {
                string error = "Error(s) During Receiving Product... " +
                    e.ValidationExceptions.Select(x => x.Message)
                    .Aggregate((x, y) => x + ", " + y);

                result = BadRequest(error);
            }
            catch (Exception e)
            {
                result = StatusCode(500, "Unknown error occurred, please try again later.");
            }
            return result;


        }
        [HttpGet("FullActiveInventory")]
        public ActionResult<IEnumerable<Product>> GetActiveInventoty_GET()
        {
            return new ProductController().GetInventory().OrderBy(x=>x.Quantity).Where(x => x.Discontinue == false).ToList();
        }

        [HttpGet("FullInventory")]
        public ActionResult<IEnumerable<Product>> GetFullInventoty_GET()
        {
            return new ProductController().GetInventory().OrderBy(x => x.Name).ToList();
        }

        [HttpGet("OneProduct")]
        public ActionResult<Product> OneProductByID_GET(string id)
        {
            ActionResult<Product> result;
            try
            {
                result = new ProductController().GetProductByID(id);
            }
            catch (ValidationException e)
            {
                string error = "Error(s) During Receiving Product... " +
                    e.ValidationExceptions.Select(x => x.Message)
                    .Aggregate((x, y) => x + ", " + y);

                result = BadRequest(error);
            }
            catch (Exception e)
            {
                result = StatusCode(500, "Unknown error occurred, please try again later.");
            }
            return result;


        }


    }
}
