# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
This is a simple application used to buy clothes from the retailer Fashion Haus. Users can sort, filter, and add/remove items from their cart.

### Usability Principles Considered


### Organization of Components
The App component is the primary component. It contains the sort, filter, and cart functionality. The App component also contains the StoreGrid component, which organizes the item cards into a grid. Each item card is a StoreItem component. Additionally, the items in the cart are CartItem components.

### How Data is Passed Down Through Components
The App component contains the add and remove functions, as well as the item and cart data. The add and remove functions and the item and cart data are passed to the StoreGrid, which passes them to the StoreItems. The StoreItem uses the item data to populate the item card, and uses the functions and cart data to give the item card's add and remove buttons correct functionality based on the amount of the item in the cart. The App component also passes the cart information to the CartItem components, and the CartItem components use the data to populate correctly.

### How the User Triggers State Changes
The user triggers state changes using state variables, useEffect hooks, and the passing of props to components. The cart is controlled by a state variable, and when there is an item added to the cart  
