const Message = require('../models/Message');

// Create a new message
exports.createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Get client IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
      ipAddress
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: newMessage._id,
        name: newMessage.name,
        createdAt: newMessage.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating message:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
};

// Get all messages (admin only - for future use)
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .select('-ipAddress');

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
};

// Get single message
exports.getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    // Mark as read
    if (!message.isRead) {
      message.isRead = true;
      await message.save();
    }

    res.status(200).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch message'
    });
  }
};

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete message'
    });
  }
};
