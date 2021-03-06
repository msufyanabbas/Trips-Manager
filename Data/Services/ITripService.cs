using System.Collections.Generic;

namespace Trips.Data{
    public interface ITripService{
        List<Trip> GetAllTrips();
        Trip GetTripById(int id);
        void UpdateTrip(int id, Trip trip);
        void DeleteTrip(int id);
        void AddTrip(Trip trip);
        
    }
}