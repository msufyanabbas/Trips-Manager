using System.Collections.Generic;
using System.Linq;

namespace Trips.Data{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
            if(trip != null){
                Data.Trips.Add(trip);
            }
        }

        public void DeleteTrip(int id)
        {
            var trip = Data.Trips.FirstOrDefault(n => n.Id == id);
            if(trip != null){
                Data.Trips.Remove(trip);
            }
        }

        public List<Trip> GetAllTrips()
        {
            return Data.Trips.ToList();
        }

        public Trip GetTripById(int id)
        {
            var trip = Data.Trips.FirstOrDefault(n => n.Id == id);
            return trip;
        }

        public void UpdateTrip(int id, Trip trip)
        {
            var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == id);
            if(oldTrip != null){
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;

            }
        }
    }
}