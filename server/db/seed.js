const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("businesses.db");

db.serialize(() => {
  // Create group_orders table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS group_orders (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    organizer TEXT,
    currentParticipants INTEGER,
    targetParticipants INTEGER,
    pricePerUnit REAL,
    originalPrice REAL,
    savings REAL,
    deadline TEXT,
    location TEXT,
    category TEXT,
    image TEXT
  )`);

  // Create vendors table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS vendors (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    category TEXT,
    description TEXT,
    location TEXT,
    rating REAL,
    reviewCount INTEGER,
    verified INTEGER,
    badges TEXT,
    image TEXT
  )`);

  // Group Orders Data
  const groupOrders = [
    {
      title: "Eco-Friendly Packaging Bulk Order",
      description: "Sustainable cardboard boxes and biodegradable packaging materials",
      organizer: "Green Business Alliance",
      currentParticipants: 18,
      targetParticipants: 25,
      pricePerUnit: 2.5,
      originalPrice: 4.0,
      savings: 37.5,
      deadline: "5 days left",
      location: "Downtown District",
      category: "Packaging",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXfBjaGqR7nKaB36QuxNGbpkPPTLcZzBU-A&s"
    },
    {
      title: "Local Organic Produce Weekly Delivery",
      description: "Fresh vegetables and fruits from local farms, weekly delivery included",
      organizer: "Farm Fresh Co-op",
      currentParticipants: 32,
      targetParticipants: 40,
      pricePerUnit: 35.0,
      originalPrice: 50.0,
      savings: 30,
      deadline: "2 days left",
      location: "North Side",
      category: "Food & Beverage",
      image: "https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "Bulk Toiletries Supply Bundle",
      description: "Essential toiletries package for offices, hotels, and businesses – includes soap, shampoo, paper products, and sanitizers.",
      organizer: "ProClean Supplies Co.",
      currentParticipants: 12,
      targetParticipants: 20,
      pricePerUnit: 89.0,
      originalPrice: 149.0,
      savings: 40,
      deadline: "8 days left",
      location: "Business District",
      category: "Toiletries",
      image: "https://images-platform.99static.com//2fKa4eKE-YJ5R5IsqjRCowM1Zdw=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/109/109883/attachment_109883487"
    }
  ];

  const insertOrder = db.prepare(`INSERT OR IGNORE INTO group_orders 
    (title, description, organizer, currentParticipants, targetParticipants, pricePerUnit, originalPrice, savings, deadline, location, category, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  groupOrders.forEach(order => insertOrder.run(Object.values(order)));
  insertOrder.finalize();

  // Vendors Data
  const vendors = [
    {
      name: "Green Valley Organic Co-op",
      category: "Farming & Produce",
      description: "Locally grown organic vegetables and herbs. Farm-to-business delivery within 24 hours.",
      location: "2.5 km away",
      rating: 4.9,
      reviewCount: 127,
      verified: 1,
      badges: JSON.stringify(["Organic Certified", "Same-day delivery"]),
      image: "https://thumbs.dreamstime.com/b/hands-holding-wheat-sustainable-farming-logo-design-350702375.jpg"
    },
    {
      name: "Metro Logistics Hub",
      category: "Transportation",
      description: "Local delivery service specializing in B2B logistics and last-mile solutions.",
      location: "1.8 km away",
      rating: 4.7,
      reviewCount: 89,
      verified: 1,
      badges: JSON.stringify(["24/7 Service", "Bulk orders"]),
      image: "https://t4.ftcdn.net/jpg/04/40/17/57/360_F_440175733_5w111NXXscAKLmK46rnMXMbRkhcbcURX.jpg"
    },
    {
      name: "EcoPack Solutions",
      category: "Packaging",
      description: "Sustainable packaging materials made from recycled content. Custom branding available.",
      location: "3.2 km away",
      rating: 4.8,
      reviewCount: 156,
      verified: 1,
      badges: JSON.stringify(["Eco-friendly", "Custom design"]),
      image: "https://t4.ftcdn.net/jpg/03/61/04/79/360_F_361047913_8tvQZmBFb2HTrpsBmQJh6KnyGgSDvYyt.jpg"
    },
    {
      name: "Daily Loaf Bakery",
      category: "Bread Services",
      description: "Freshly baked artisan breads delivered daily. Sourdough, rye, and more.",
      location: "1.5 km away",
      rating: 4.6,
      reviewCount: 73,
      verified: 1,
      badges: JSON.stringify(["Organic ingredients", "Family-owned"]),
      image: "https://static.vecteezy.com/system/resources/previews/019/813/605/non_2x/bakery-chef-logo-wheat-bakery-logo-vector.jpg"
    },
    {
      name: "Bale Masters Ltd.",
      category: "Clothing Bales",
      description: "Importers of Grade A and B mixed clothing bales. Wholesale and retail options available.",
      location: "5.2 km away",
      rating: 4.6,
      reviewCount: 89,
      verified: 1,
      badges: JSON.stringify(["Verified Importer", "Bulk Discounts"]),
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/OE/WN/NR/12575100/used-clothes-bales-500x500.jpg"
    },
    {
      name: "Urban Bale Traders",
      category: "Clothing Bales",
      description: "Specialized in children's and women’s clothing bales from the UK and Canada.",
      location: "3.8 km away",
      rating: 4.8,
      reviewCount: 102,
      verified: 1,
      badges: JSON.stringify(["Grade A Only", "Fast Delivery"]),
      image: "https://i.pinimg.com/736x/8f/40/58/8f405872b084c6df3e089b3c21c15596.jpg"
    },
    {
      name: "TechEdge Automation",
      category: "Industrial IT Services",
      description: "Providing SCADA systems, PLC programming, and smart factory integrations for modern manufacturing plants.",
      location: "7.1 km away",
      rating: 4.7,
      reviewCount: 76,
      verified: 1,
      badges: JSON.stringify(["24/7 Support", "IoT Integration"]),
      image: "https://www.advancedcontrolcorp.com/wp-content/uploads/2021/07/Industrial-IT-services.jpg"
    },
    {
      name: "FactoryNet Solutions",
      category: "Industrial IT Services",
      description: "Experts in MES (Manufacturing Execution Systems), data acquisition, and cybersecurity for industrial networks.",
      location: "6.4 km away",
      rating: 4.5,
      reviewCount: 63,
      verified: 1,
      badges: JSON.stringify(["ISO Certified", "Cybersecurity Experts"]),
      image: "https://media.licdn.com/dms/image/C5612AQE1nGgiA-pxKA/article-cover_image-shrink_600_2000/0/1520227242851"
    },
    {
      name: "Metro Steel Works",
      category: "Manufacturing",
      description: "Custom fabrication of steel structures, tools, and parts for industrial and construction use.",
      location: "12.0 km away",
      rating: 4.4,
      reviewCount: 58,
      verified: 1,
      badges: JSON.stringify(["Custom Orders", "High Durability Materials"]),
      image: "https://www.tatasteelfoundation.org/wp-content/uploads/2020/09/Manufacturing.jpg"
    },
    {
      name: "Prime Plastics Co.",
      category: "Manufacturing",
      description: "Producers of high-quality plastic containers and packaging supplies for food and chemical industries.",
      location: "8.6 km away",
      rating: 4.6,
      reviewCount: 91,
      verified: 1,
      badges: JSON.stringify(["Eco-Friendly", "Bulk Production"]),
      image: "https://cdn.corporatefinanceinstitute.com/assets/manufacturing-1024x683.jpeg"
    }
  ];

  const insertVendor = db.prepare(`INSERT OR IGNORE INTO vendors 
    (name, category, description, location, rating, reviewCount, verified, badges, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  vendors.forEach(vendor => insertVendor.run(Object.values(vendor)));
  insertVendor.finalize();

  console.log("✅ Seeding complete: Data added (duplicates avoided).");
});

db.close();
