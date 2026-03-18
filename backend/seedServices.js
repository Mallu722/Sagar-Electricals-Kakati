require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('./models/Service');

const services = [
  // Residential
  {
    title: 'House Wiring & Installation',
    description: 'Safe and compliant residential wiring services for new homes and renovations across Karnataka.',
    iconName: 'Home',
    category: 'Residential'
  },
  {
    title: 'Fan & Light Installation',
    description: 'Ceiling fans, chandeliers, recessed lighting, and outdoor landscape lighting installations.',
    iconName: 'Fan',
    category: 'Residential'
  },
  {
    title: 'Switchboard Repair',
    description: 'Troubleshooting and fixing sparking outlets, old switchboards, and failing switches.',
    iconName: 'Box',
    category: 'Residential'
  },
  {
    title: 'Emergency Electrical Repair',
    description: '24/7 emergency dispatch for power outages, electrical fires, and hazard mitigations.',
    iconName: 'ShieldAlert',
    category: 'Residential'
  },
  // Transformer
  {
    title: 'Transformer Repair & Services',
    description: 'Expert repair and maintenance for all types of electrical transformers, ensuring optimal performance and longevity.',
    iconName: 'Wrench',
    category: 'Transformer'
  },
  {
    title: 'Power Transformer Repair & Services',
    description: 'Specialized servicing for high-capacity power transformers used in industrial and utility applications.',
    iconName: 'Zap',
    category: 'Transformer'
  },
  {
    title: 'Water Cooled Transformer Repair & Services',
    description: 'Maintenance and repair of water-cooled transformer systems, focusing on cooling efficiency and electrical integrity.',
    iconName: 'Settings',
    category: 'Transformer'
  },
  {
    title: 'CSP Transformer Repair & Services',
    description: 'Reliable repair services for Completely Self-Protected (CSP) transformers used in distribution networks.',
    iconName: 'Box',
    category: 'Transformer'
  },
  {
    title: 'Intank OLTC Distribution Transformer Repair & Services',
    description: 'Specialized repair and maintenance of On-Load Tap Changer (OLTC) distribution transformers for uninterrupted voltage regulation.',
    iconName: 'Settings',
    category: 'Transformer'
  },
  {
    title: 'Distribution Transformer Repair & Services',
    description: 'Repair and overhaul of distribution transformers to maintain consistent power delivery for businesses and communities.',
    iconName: 'Zap',
    category: 'Transformer'
  },
  // Testing
  {
    title: 'Transformer Cable Testing Services',
    description: 'Comprehensive testing of transformer cables to detect faults, insulation breakdown, and ensure system reliability.',
    iconName: 'ShieldAlert',
    category: 'Testing'
  },
  {
    title: 'High Voltage Cable Testing Services',
    description: 'Advanced testing for high voltage cables to ensure safety and compliance with industrial standards across Karnataka.',
    iconName: 'Zap',
    category: 'Testing'
  },
  // Industrial
  {
    title: 'Industrial Oil Filtration Services',
    description: 'High-quality industrial oil filtration to remove contaminants and moisture, extending the life of transformer oil.',
    iconName: 'Fan',
    category: 'Industrial'
  },
  {
    title: 'Electrical Maintenance',
    description: 'Routine check-ups, panel upgrades, and preventative maintenance for commercial and industrial properties.',
    iconName: 'Wrench',
    category: 'Industrial'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Service.deleteMany({});
    console.log('Cleared existing services.');
    
    await Service.insertMany(services);
    console.log(`Seeded ${services.length} services successfully!`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
