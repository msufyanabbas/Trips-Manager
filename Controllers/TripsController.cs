using Trips.Data;
using Microsoft.AspNetCore.Mvc;

namespace Trips.Controller{
    [Route("api/Trips")]
    public class TripsController:ControllerBase{
        private ITripService _service;
        public TripsController(ITripService service)
        {   
            this._service = service;    
        }
        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip){
           _service.AddTrip(trip);
           return Ok();
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteTrip(int id){
            _service.DeleteTrip(id);
            return Ok();
        }
        [HttpGet("GetTrips")]
        public IActionResult GetTrips(){
            var allTrips = _service.GetAllTrips();
            return Ok(allTrips);
        }
        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id){
            var trip = _service.GetTripById(id);
            return Ok(trip);
        }
        [HttpPut("Update/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Trip trip){
            _service.UpdateTrip(id, trip);
            return Ok();
        }
    }
}