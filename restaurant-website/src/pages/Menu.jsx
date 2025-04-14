import React from 'react';
import './Menu.css';

// Menu Item Component with price
const MenuItem = ({ name, description, price }) => (
  <div className="menu-item">
    <div className="item-header">
      <h3 className="item-name">{name}</h3>
      <span className="item-price">{price}</span>
    </div>
    <p className="item-description">{description}</p>
  </div>
);

// Menu Section Component
const MenuSection = ({ title, items, className = '' }) => (
  <section className={`menu-section ${className}`}>
    <h2 className="section-title">{title}</h2>
    <div className="menu-items">
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          name={item.name} 
          description={item.description}
          price={item.price} 
        />
      ))}
    </div>
  </section>
);

// Main Menu Component
const Menu = () => {
  // New menu data
  const starters = [
    { name: 'Bruschetta', description: 'Fresh tomatoes, basil, olive oil, and toasted baguette slices', price: '$8.50' },
    { name: 'Caesar Salad', description: 'Crisp romaine with homemade Caesar dressing', price: '$9.00' }
  ];

  const mains = [
    { name: 'Grilled Salmon', description: 'Served with lemon butter sauce and seasonal vegetables', price: '$22.00' },
    { name: 'Ribeye Steak', description: '12 oz prime cut with garlic mashed potatoes', price: '$28.00' },
    { name: 'Vegetable Risotto', description: 'Creamy Arborio rice with wild mushrooms', price: '$18.00' }
  ];

  const desserts = [
    { name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone', price: '$7.50' },
    { name: 'Cheesecake', description: 'Creamy cheesecake with berry compote', price: '$7.00' }
  ];

  const beverages = [
    { name: 'Red Wine (Glass)', description: 'A selection of Italian reds', price: '$10.00' },
    { name: 'White Wine (Glass)', description: 'Crisp and refreshing', price: '$9.00' },
    { name: 'Craft Beer', description: 'Local artisan brews', price: '$6.00' },
    { name: 'Espresso', description: 'Strong and aromatic', price: '$3.00' }
  ];

  return (
    <div className="container">
      <header>
        <p className="menu-title">Lunch & Dinner</p>
      </header>
      
      <main>
        <MenuSection title="Starters" items={starters} />
        <MenuSection title="Main Courses" items={mains} />
        <MenuSection title="Desserts" items={desserts} />
        <MenuSection title="Beverages" items={beverages} />
      </main>
      
      <div className="disclaimer">
        <p>Please inform your server of any allergies or dietary requirements.</p>
        <p>A discretionary 12.5% service charge will be added to your bill.</p>
      </div>
    </div>
  );
};

export default Menu;