using System.Collections.Generic;

namespace Trips.Data{
    public static class Data{
        public static List<Trip> Trips => allTrips;
        static List<Trip> allTrips = new List<Trip>(){
            new Trip(){
                Id = 1,
                Name = "Karachi, Pakistan",
                Description = "Karachi is the biggest city in Pakistan",
                DateStarted = new System.DateTime(2019,02,02),
                DateCompleted = null
            },
            new Trip(){
                Id = 2,
                Name = "Lahore, Pakistan",
                Description = "Lahore is the second biggest city in Pakistan",
                DateStarted = new System.DateTime(2019,02,02),
                DateCompleted = null
            }
        };
    }
}