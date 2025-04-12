import React from 'react';
import './Menu.css';

// Menu Item Component
const MenuItem = ({ name, description }) => (
  <div className="menu-item">
    <h3 className="item-name">{name}</h3>
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
        />
      ))}
    </div>
  </section>
);

// Special Menu Item Component with extra description
const MenuItemWithExtra = ({ name, description, extra }) => (
  <div className="menu-item">
    <h3 className="item-name">{name}</h3>
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
          extra={extras && extras[index]}
        />
      ))}
    </div>
  </section>
);

// Main Menu Component
const Menu = () => {
  // Menu data
  const oysters = [
    { name: 'Native Rock Oysters', description: 'Half dozen, served with shallot vinegar and fresh lemon' },
    { name: 'Oysters Rockefeller', description: 'Baked with a blend of spinach, butter, and parmesan' },
    { name: 'Caviar & Oysters', description: 'With a touch of crème fraîche and caviar' }
  ];

  const starters = [
    { name: 'Seared Scallops', description: 'With truffle butter, caviar, and micro herbs' },
    { name: 'Beef Tartare', description: 'Hand-cut aged beef with capers, shallots, mustard, and quail egg' },
    { name: 'Foie Gras', description: 'Pan-seared with fig jam, toasted brioche, and a balsamic reduction' },
    { name: 'Lobster Bisque', description: 'Rich, creamy soup with cognac and fresh lobster meat' },
    { name: 'Tuna Carpaccio', description: 'Sliced yellowfin tuna with a citrus dressing and olive oil' }
  ];

  const mains = [
    { name: 'Roast Pumpkin Salad', description: 'Roasted pumpkin, quinoa, and a citrus vinaigrette' },
    { name: 'Grilled Lobster Tail', description: 'Charred with garlic butter and served with lemon wedges' },
    { name: 'Lamb Chops', description: 'Herb-crusted and grilled, served with rosemary jus' },
    { name: 'Sea Bass Fillet', description: 'Pan-roasted with fennel, tomato, and saffron sauce' },
    { name: 'Wagyu Beef Burger', description: 'Aged Wagyu patty with truffle aioli, lettuce, and pickles' }
  ];

  const steaks = [
    { name: 'Filet Mignon', description: '200g, melt-in-your-mouth tenderness, cooked to perfection' },
    { name: 'Dry-Aged Ribeye', description: '350g, intense flavour from 28-day dry-aging process' },
    { name: 'T-bone Steak', description: '500g, a perfect combination of fillet and strip' },
    { name: 'Tomahawk Steak', description: '1kg, for two, bone-in with rich marbling and full flavour' },
    { name: 'Japanese A5 Wagyu', description: '100g, delicately marbled for a truly unforgettable experience' }
  ];

  const sides = [
    { name: 'Truffle Mac & Cheese', description: 'Creamy, rich, and topped with golden breadcrumbs' },
    { name: 'Creamed Spinach', description: 'Fresh spinach in a luxurious cream sauce' },
    { name: 'Hand-Cut Chips', description: 'Golden, crispy with sea salt' },
    { name: 'Sautéed Mushrooms', description: 'Wild mushrooms in garlic butter' },
    { name: 'Chargrilled Asparagus', description: 'With lemon and parmesan' },
    { name: 'Cauliflower Gratin', description: 'Baked with cheese and a delicate béchamel sauce' }
  ];

  const cheese = [
    { name: 'A Selection of Artisan Cheeses', description: 'Served with crackers, fig chutney, and fresh fruits' }
  ];

  const desserts = [
    { name: 'Chocolate Fondant', description: 'With salted caramel ice cream and fresh raspberries' },
    { name: 'Lemon Meringue Tart', description: 'With a buttery crust and tangy lemon curd' },
    { name: 'Vanilla Bean Panna Cotta', description: 'Topped with fresh berries and a raspberry coulis' },
    { name: 'Café Fausse Cheesecake', description: 'Rich and creamy with a pistachio crust' },
    { name: 'Café Fausse\'s Grand Selection of Sorbets', description: 'Seasonal fruit sorbets, perfect for refreshing your palate' }
  ];

  // Drinks Sections
  const cocktails = [
    { name: 'Café Fausse Old Fashioned', description: 'Bourbon, angostura bitters, and a twist of orange peel' },
    { name: 'French 75', description: 'Gin, champagne, lemon juice, and a touch of sugar' },
    { name: 'Negroni', description: 'Gin, vermouth rosso, and Campari' },
    { name: 'The Manhattan', description: 'Rye whiskey, sweet vermouth, and bitters, served with a maraschino cherry' },
    { name: 'Martini', description: 'Vodka or Gin, dry vermouth, and an olive or twist of lemon' },
    { name: 'The Classic Mojito', description: 'Rum, mint, lime, soda, and sugar' },
    { name: 'Café Fausse Signature Cocktail', description: 'A blend of gin, elderflower liqueur, and a dash of prosecco' }
  ];

  const whiteWines = [
    { name: 'Champagne, Veuve Clicquot Yellow Label', description: 'Elegant and well-balanced' },
    { name: 'Sancerre, Domaine Vacheron', description: 'Crisp, fresh, and mineral-driven' },
    { name: 'Chardonnay, Domaine Leflaive', description: 'Rich, creamy with delicate oak' },
    { name: 'Riesling, Dr. Loosen', description: 'Elegant and fruity with a touch of minerality' },
    { name: 'Puligny-Montrachet, Domaine Leflaive', description: 'Complex and beautifully balanced' }
  ];

  const redWines = [
    { name: 'Bordeaux, Château Margaux', description: 'Full-bodied and refined with dark fruit' },
    { name: 'Barolo, Marchesi di Barolo', description: 'Structured with rich tannins and aromas of dark cherries' },
    { name: 'Pinot Noir, Domaine de la Romanée-Conti', description: 'Silky smooth with deep, berry flavours' },
    { name: 'Syrah, Guigal Côte-Rôtie La Landonne', description: 'Spicy with hints of black pepper and dark fruits' },
    { name: 'Malbec, Catena Zapata', description: 'Deep purple, with soft tannins and dark berry fruits' }
  ];

  return (
    <div className="container">
      <header>
        <h1 className="restaurant-name">Café Fausse</h1>
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
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer>
        <p>Prices available upon request. Please inform your server of any allergies or dietary requirements.</p>
      </footer>
    </div>
  );
};

export default Menu;