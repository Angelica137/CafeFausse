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

// Special Menu Item Component with extra description
const MenuItemWithExtra = ({ name, description, price, extra }) => (
  <div className="menu-item">
    <div className="item-header">
      <h3 className="item-name">{name}</h3>
      <span className="item-price">{price}</span>
    </div>
    <p className="item-description">{description}</p>
    {extra && <p className="cheese-varieties">{extra}</p>}
  </div>
);

// Special case for sections with extra descriptions
const MenuSectionWithExtras = ({ title, items, extras, className = '' }) => (
  <section className={`menu-section ${className}`}>
    <h2 className="section-title">{title}</h2>
    <div className="menu-items">
      {items.map((item, index) => (
        <MenuItemWithExtra 
          key={index} 
          name={item.name} 
          description={item.description}
          price={item.price}
          extra={extras && extras[index]}
        />
      ))}
    </div>
  </section>
);

// Main Menu Component
const Menu = () => {
  // Menu data with prices
  const oysters = [
    { name: 'Native Rock Oysters', description: 'Half dozen, served with shallot vinegar and fresh lemon', price: '£24' },
    { name: 'Oysters Rockefeller', description: 'Baked with a blend of spinach, butter, and parmesan', price: '£28' },
    { name: 'Caviar & Oysters', description: 'With a touch of crème fraîche and caviar', price: '£42' }
  ];

  const starters = [
    { name: 'Seared Scallops', description: 'With truffle butter, caviar, and micro herbs', price: '£26' },
    { name: 'Beef Tartare', description: 'Hand-cut aged beef with capers, shallots, mustard, and quail egg', price: '£24' },
    { name: 'Foie Gras', description: 'Pan-seared with fig jam, toasted brioche, and a balsamic reduction', price: '£28' },
    { name: 'Lobster Bisque', description: 'Rich, creamy soup with cognac and fresh lobster meat', price: '£22' },
    { name: 'Tuna Carpaccio', description: 'Sliced yellowfin tuna with a citrus dressing and olive oil', price: '£24' }
  ];

  const mains = [
    { name: 'Roast Pumpkin Salad', description: 'Roasted pumpkin, quinoa, and a citrus vinaigrette', price: '£24' },
    { name: 'Grilled Lobster Tail', description: 'Charred with garlic butter and served with lemon wedges', price: '£48' },
    { name: 'Lamb Chops', description: 'Herb-crusted and grilled, served with rosemary jus', price: '£38' },
    { name: 'Sea Bass Fillet', description: 'Pan-roasted with fennel, tomato, and saffron sauce', price: '£36' },
    { name: 'Wagyu Beef Burger', description: 'Aged Wagyu patty with truffle aioli, lettuce, and pickles', price: '£34' }
  ];

  const steaks = [
    { name: 'Filet Mignon', description: '200g, melt-in-your-mouth tenderness, cooked to perfection', price: '£58' },
    { name: 'Dry-Aged Ribeye', description: '350g, intense flavour from 28-day dry-aging process', price: '£62' },
    { name: 'T-bone Steak', description: '500g, a perfect combination of fillet and strip', price: '£68' },
    { name: 'Tomahawk Steak', description: '1kg, for two, bone-in with rich marbling and full flavour', price: '£120' },
    { name: 'Japanese A5 Wagyu', description: '100g, delicately marbled for a truly unforgettable experience', price: '£95' }
  ];

  const sides = [
    { name: 'Truffle Mac & Cheese', description: 'Creamy, rich, and topped with golden breadcrumbs', price: '£14' },
    { name: 'Creamed Spinach', description: 'Fresh spinach in a luxurious cream sauce', price: '£12' },
    { name: 'Hand-Cut Chips', description: 'Golden, crispy with sea salt', price: '£10' },
    { name: 'Sautéed Mushrooms', description: 'Wild mushrooms in garlic butter', price: '£12' },
    { name: 'Chargrilled Asparagus', description: 'With lemon and parmesan', price: '£14' },
    { name: 'Cauliflower Gratin', description: 'Baked with cheese and a delicate béchamel sauce', price: '£12' }
  ];

  const cheese = [
    { name: 'A Selection of Artisan Cheeses', description: 'Served with crackers, fig chutney, and fresh fruits', price: '£24' }
  ];

  const desserts = [
    { name: 'Chocolate Fondant', description: 'With salted caramel ice cream and fresh raspberries', price: '£16' },
    { name: 'Lemon Meringue Tart', description: 'With a buttery crust and tangy lemon curd', price: '£14' },
    { name: 'Vanilla Bean Panna Cotta', description: 'Topped with fresh berries and a raspberry coulis', price: '£14' },
    { name: 'Café Fausse Cheesecake', description: 'Rich and creamy with a pistachio crust', price: '£16' },
    { name: 'Café Fausse\'s Grand Selection of Sorbets', description: 'Seasonal fruit sorbets, perfect for refreshing your palate', price: '£12' }
  ];

  // Drinks Sections
  const cocktails = [
    { name: 'Café Fausse Old Fashioned', description: 'Bourbon, angostura bitters, and a twist of orange peel', price: '£18' },
    { name: 'French 75', description: 'Gin, champagne, lemon juice, and a touch of sugar', price: '£19' },
    { name: 'Negroni', description: 'Gin, vermouth rosso, and Campari', price: '£17' },
    { name: 'The Manhattan', description: 'Rye whiskey, sweet vermouth, and bitters, served with a maraschino cherry', price: '£18' },
    { name: 'Martini', description: 'Vodka or Gin, dry vermouth, and an olive or twist of lemon', price: '£16' },
    { name: 'The Classic Mojito', description: 'Rum, mint, lime, soda, and sugar', price: '£16' },
    { name: 'Café Fausse Signature Cocktail', description: 'A blend of gin, elderflower liqueur, and a dash of prosecco', price: '£20' }
  ];

  const whiteWines = [
    { name: 'Champagne, Veuve Clicquot Yellow Label', description: 'Elegant and well-balanced', price: '£120' },
    { name: 'Sancerre, Domaine Vacheron', description: 'Crisp, fresh, and mineral-driven', price: '£85' },
    { name: 'Chardonnay, Domaine Leflaive', description: 'Rich, creamy with delicate oak', price: '£110' },
    { name: 'Riesling, Dr. Loosen', description: 'Elegant and fruity with a touch of minerality', price: '£75' },
    { name: 'Puligny-Montrachet, Domaine Leflaive', description: 'Complex and beautifully balanced', price: '£180' }
  ];

  const redWines = [
    { name: 'Bordeaux, Château Margaux', description: 'Full-bodied and refined with dark fruit', price: '£220' },
    { name: 'Barolo, Marchesi di Barolo', description: 'Structured with rich tannins and aromas of dark cherries', price: '£140' },
    { name: 'Pinot Noir, Domaine de la Romanée-Conti', description: 'Silky smooth with deep, berry flavours', price: '£320' },
    { name: 'Syrah, Guigal Côte-Rôtie La Landonne', description: 'Spicy with hints of black pepper and dark fruits', price: '£160' },
    { name: 'Malbec, Catena Zapata', description: 'Deep purple, with soft tannins and dark berry fruits', price: '£95' }
  ];

  return (
    <div className="container">
      <header>
        <p className="menu-title">Lunch & Dinner</p>
      </header>
      
      <main>
        <MenuSection title="Oysters" items={oysters} />
        <MenuSection title="Starters" items={starters} />
        <MenuSection title="Mains" items={mains} />
        <MenuSection title="Steaks" items={steaks} className="steaks-section" />
        <MenuSection title="Sides" items={sides} />
        <MenuSectionWithExtras 
          title="Cheese Platter" 
          items={cheese} 
          extras={['Including: Brie de Meaux, Comté, Stilton, and Aged Manchego']} 
        />
        <MenuSection title="Desserts" items={desserts} />
        
        <div className="menu-divider">
          <hr />
          <span>Drinks</span>
          <hr />
        </div>
        
        <MenuSection title="Cocktails" items={cocktails} />
        
        <section className="menu-section wine-section">
          <h2 className="section-title">Wine Menu</h2>
          
          <h3 className="wine-category">White Wines</h3>
          <div className="menu-items">
            {whiteWines.map((item, index) => (
              <MenuItem 
                key={index} 
                name={item.name} 
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          
          <h3 className="wine-category">Red Wines</h3>
          <div className="menu-items">
            {redWines.map((item, index) => (
              <MenuItem 
                key={index} 
                name={item.name} 
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </main>
      
      <div className="disclaimer">
        <p>Please inform your server of any allergies or dietary requirements.</p>
        <p>A discretionary 12.5% service charge will be added to your bill.</p>
      </div>
    </div>
  );
};

export default Menu;