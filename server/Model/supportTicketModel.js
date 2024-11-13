import mongoose from 'mongoose';

const supportTicketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    unique: true
  },
  name: String,
  surname: String,
  email: String,
  subject: String,
  message: String,
  response: String,
  gender: String,
  resolved: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to generate ticket ID
supportTicketSchema.pre('save', async function(next) {
  if (!this.ticketId) {
    const lastTicket = await this.constructor.findOne({}, {}, { sort: { 'ticketId': -1 } });
    let nextNumber = 1;
    
    if (lastTicket && lastTicket.ticketId) {
      const lastNumber = parseInt(lastTicket.ticketId.split('#')[1]);
      nextNumber = lastNumber + 1;
    }
    
    this.ticketId = `Ticket #${nextNumber.toString().padStart(3, '0')}`;
  }
  next();
});

export const SupportTicket = mongoose.model('supporttickets', supportTicketSchema);
