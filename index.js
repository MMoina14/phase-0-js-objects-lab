//Write your code here

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};


function logAttendeeName(attendee) {
  console.log("Attendee Name:", attendee.name);
}


function logTicketPrice(attendee) {
  console.log("Ticket Price:", attendee.ticketPrice);
}


function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
  console.log(`Ticket type updated to: ${attendee.ticketType}`);
}


function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
  console.log(`Ticket price updated to: $${attendee.ticketPrice}`);
}


function removeEventProperty(attendee) {
  delete attendee.event;
  console.log("Event property removed.");
}


function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
  console.log("Checked-in property added.");
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};