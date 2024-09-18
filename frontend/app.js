// DOM Elements
const appContent = document.getElementById('app-content');

// Event Listeners for Navigation
document.getElementById('home-link').addEventListener('click', loadHomePage);
document.getElementById('properties-link').addEventListener('click', loadPropertiesPage);
document.getElementById('auth-link').addEventListener('click', loadAuthPage);


// Property Data (JSON)
const propertyData = {
    
        "property": [
              {
                "id": "852223931024",
                "area": "Westchester County",
                "address": "6 Garth rd, Scarsdale, NY 10583",
                "city": "Scarsdale",
                "image": "./property/6.jpg",
                "type": "Duplex",
                "floorspace": 1264,
                "beds": 3,
                "baths": 1,
                "price": 295000,
                "parking": 2,
                "construction": ["fireplace", "landry"]
              },
              {
                "id": "651263730501",
                "area": "Westchester County",
                "address": "39 Sterling ave, White Plains, NY 10606",
                "city": "White Plains",
                "image": "./property/1.jpg",
                "type": "Condo",
                "floorspace": 768,
                "beds": 2,
                "baths": 2,
                "price": 445000,
                "parking": 1,
                "construction": ["elevator", "garage"]
              },
              {
                "id": "3511539610225",
                "area": "Westchester County",
                "address": "62 Highland St, Eastchester, NY 10608",
                "city": "Eastchester",
                "image": "./property/2.jpg",
                "type": "Single Family",
                "floorspace": 1264,
                "beds": 4,
                "baths": 1,
                "price": 325000,
                "parking": 0,
                "construction": ["basement", "landry"]
              },
              {
                "id": "2511639410001",
                "area": "Westchester County",
                "address": "33 Alden Pl, Bronxville, NY 10708",
                "city": "Bronxville",
                "image": "./property/3.jpg",
                "type": "Townhouse",
                "floorspace": 1074,
                "beds": 3,
                "baths": 1,
                "price": 665000,
                "parking": 0,
                "construction": ["fireplace", "gym"]
              },
              {
                "id": "2411639439991",
                "area": "Westchester County",
                "address": "261 California rd, Mamaroneck, NY 10612",
                "city": "Mamaroneck",
                "image": "./property/4.jpg",
                "type": "Studio",
                "floorspace": 700,
                "beds": 1,
                "baths": 1,
                "price": 265000,
                "parking": 1,
                "construction": ["landry", "gym"]
              },
              {
                "id": "1522639490009",
                "area": "Westchester County",
                "address": "23 Isle Lane, New Rochelle, NY 10538",
                "city": "New Rochelle",
                "image": "./property/7.jpg",
                "type": "Multi Family",
                "floorspace": 1630,
                "beds": 3,
                "baths": 2,
                "price": 765000,
                "parking": 3,
                "construction": ["basement", "fireplace"]
              },
              {
                "id": "19639490088",
                "area": "Westchester County",
                "address": "95 Vernon ave, Scarsdale, NY 10538",
                "city": "Scarsdale",
                "image": "./property/2.jpg",
                "type": "Studio",
                "floorspace": 1200,
                "beds": 1,
                "baths": 1,
                "price": 215000,
                "parking": 3,
                "construction": ["elevator", "garage"]
              },
              {
                "id": "1122459390065",
                "area": "Westchester County",
                "address": "321 Munday Lane, Eastchester, NY 10606",
                "city": "Eastchester",
                "image": "./property/8.jpg",
                "type": "Multi Family",
                "floorspace": 2100,
                "beds": 3,
                "baths": 1,
                "price": 845000,
                "parking": 3,
                "construction": ["basement", "pool"]
              },
              {
                "id": "1722679430009",
                "area": "Westchester County",
                "address": "123 Ducksworth Way, New Rochelle, NY 10535",
                "city": "New Rochelle",
                "image": "./property/9.jpg",
                "type": "Single Family",
                "floorspace": 2300,
                "beds": 2,
                "baths": 1,
                "price": 650000,
                "parking": 3,
                "construction": ["garage", "landry"]
              }
          ]
        // Your property data here
    
};

// Initial Load
loadHomePage();  // Load Home page by default

// Home Page Content
function loadHomePage() {
    appContent.innerHTML = `
        <section id="product-details" style="margin: 20px 0;">
            <h2 style="font-size: 28px; font-weight: bold; text-align: center;">Featured Property Details</h2>
            <div class="property-detail-card" style="display: flex; flex-direction: column; align-items: center; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <img src="./property/6.jpg" alt="Duplex" style="max-width: 100%; border-radius: 10px;">
                <h3 style="margin-top: 20px; font-size: 24px;">Duplex in Scarsdale</h3>
                <p><strong>Address:</strong> 6 Garth rd, Scarsdale, NY 10583</p>
                <p><strong>Price:</strong> $295,000</p>
                <p><strong>Beds:</strong> 3</p>
                <p><strong>Baths:</strong> 1</p>
                <p><strong>Floorspace:</strong> 1264 sqft</p>
                <p><strong>Parking:</strong> 2 spots</p>
                <p><strong>Features:</strong> Fireplace, Laundry</p>
            </div>

            <section id="similar-properties" style="margin-top: 40px;">
                <h2 style="font-size: 24px; text-align: center;">Similar Properties</h2>
                <div class="property-list" style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                    ${generateSimilarProperties()}
                </div>
            </section>
        </section>
    `;
}

// Generate Similar Properties from JSON
function generateSimilarProperties() {
    let similarHTML = '';
    propertyData.property.slice(1, 4).forEach(property => {
        similarHTML += `
            <div class="property-card" data-id="${property.id}" onclick="loadPropertyDetailsPage('${property.id}')" style="width: 30%; margin-bottom: 20px; background-color: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <img src="${property.image}" alt="${property.type}" style="width: 100%; height: auto; border-radius: 10px;">
                <h3 style="margin-top: 15px; font-size: 20px; font-weight: bold;">${property.type} in ${property.city}</h3>
                <p style="font-size: 16px; color: #333;">$${property.price.toLocaleString()}</p>
                <p style="font-size: 16px; color: #333;">${property.beds} Beds, ${property.baths} Baths, ${property.floorspace} sqft</p>
            </div>
        `;
    });
    return similarHTML;
}

// Properties Page Content
function loadPropertiesPage() {
    appContent.innerHTML = `
        <section id="filters">
            <h2>Filter Properties</h2>
            <form id="filter-form">
                <label for="price">Price Range:</label>
                <input type="range" id="price" name="price" min="100000" max="1000000" step="10000" value="500000">

                <label for="property-type">Property Type:</label>
                <select id="property-type" name="property-type">
                    <option value="Duplex">Duplex</option>
                    <option value="Condo">Condo</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Townhouse">Townhouse</option>
                </select>

                <label for="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter city or area">

                <button type="submit">Filter</button>
            </form>
        </section>

        <section id="property-listings">
            <h2>Available Properties</h2>
            ${generatePropertyListings()}
        </section>
    `;

    // Filter form submit event (stub)
    document.getElementById('filter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Filter functionality coming soon!');
    });
}

// Generate Property Listings from JSON
function generatePropertyListings() {
    let listingsHTML = '';
    propertyData.property.forEach(property => {
        listingsHTML += `
            <div class="property-card" data-id="${property.id}" onclick="loadPropertyDetailsPage('${property.id}')" style="
                width: 320px; 
                margin: 10px; 
                background-color: #ffffff; 
                padding: 20px; 
                border-radius: 12px; 
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
                transition: transform 0.3s, box-shadow 0.3s;
                cursor: pointer;
                overflow: hidden;
            ">
                <img src="${property.image}" alt="${property.type}" style="
                    width: 100%; 
                    height: 180px; 
                    object-fit: cover; 
                    border-radius: 10px;
                ">
                <h3 style="
                    margin-top: 15px; 
                    font-size: 22px; 
                    font-weight: 600; 
                    color: #333;
                ">
                    ${property.type} in ${property.city}
                </h3>
                <p style="
                    font-size: 18px; 
                    color: #555;
                    margin: 5px 0;
                ">
                    $${property.price.toLocaleString()}
                </p>
                <p style="
                    font-size: 16px; 
                    color: #777;
                    margin: 5px 0;
                ">
                    ${property.beds} Beds, ${property.baths} Baths, ${property.floorspace} sqft
                </p>
            </div>
        `;
    });
    return listingsHTML;
}

// Updated loadPropertyDetailsPage function
function loadPropertyDetailsPage(propertyId) {
    // Find the property with the given ID
    const property = propertyData.property.find(p => p.id === propertyId);

    if (property) {
        appContent.innerHTML = `
            <section id="property-details" style="margin: 20px 0;">
                <h2 style="font-size: 28px; font-weight: bold; text-align: center;">Property Details</h2>
                <div class="property-detail-card" style="display: flex; flex-direction: column; align-items: center; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <img src="${property.image}" alt="${property.type}" style="max-width: 100%; border-radius: 10px;">
                    <h3 style="margin-top: 20px; font-size: 24px;">${property.type} in ${property.city}</h3>
                    <p><strong>Address:</strong> ${property.address}</p>
                    <p><strong>Price:</strong> $${property.price.toLocaleString()}</p>
                    <p><strong>Beds:</strong> ${property.beds}</p>
                    <p><strong>Baths:</strong> ${property.baths}</p>
                    <p><strong>Floorspace:</strong> ${property.floorspace} sqft</p>
                    <p><strong>Parking:</strong> ${property.parking}</p>
                    <p><strong>Features:</strong> ${property.construction.join(', ')}</p>
                </div>

                <section id="similar-properties" style="margin-top: 40px;">
                    <h2 style="font-size: 24px; text-align: center;">Similar Properties</h2>
                    <div class="property-list" style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        ${generateSimilarProperties(propertyId)}
                    </div>
                </section>
            </section>
        `;
    } else {
        console.error('Property not found!');
    }
}

// Generate Similar Properties based on current property
function generateSimilarProperties(currentPropertyId) {
    let similarHTML = '';
    propertyData.property
        .filter(property => property.id !== currentPropertyId)
        .slice(0, 3) // Limit to 3 similar properties
        .forEach(property => {
            similarHTML += `
                <div class="property-card" data-id="${property.id}" onclick="loadPropertyDetailsPage('${property.id}')" style="width: 30%; margin-bottom: 20px; background-color: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <img src="${property.image}" alt="${property.type}" style="width: 100%; height: auto; border-radius: 10px;">
                    <h3 style="margin-top: 15px; font-size: 20px; font-weight: bold;">${property.type} in ${property.city}</h3>
                    <p style="font-size: 16px; color: #333;">$${property.price.toLocaleString()}</p>
                    <p style="font-size: 16px; color: #333;">${property.beds} Beds, ${property.baths} Baths, ${property.floorspace} sqft</p>
                </div>
            `;
        });
    return similarHTML;
}
function loadAuthPage() {
    appContent.innerHTML = `
        <section id="auth-module" style="
            margin: 20px auto;
            width: 90%;
            max-width: 400px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
            font-family: Arial, sans-serif;
            color: #333;
        ">
            <h2 style="
                font-size: 28px;
                text-align: center;
                margin-bottom: 20px;
                color: #007BFF;
                font-weight: bold;
            ">Sign In / Register</h2>
            
            <div id="auth-tabs" style="
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                border-bottom: 1px solid #ddd;
            ">
                <button id="sign-in-tab" style="
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-bottom: 2px solid transparent;
                    background-color: #f0f0f0;
                    color: #333;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px 5px 0 0;
                    transition: background-color 0.3s, border-bottom 0.3s;
                ">Sign In</button>
                <button id="register-tab" style="
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-bottom: 2px solid transparent;
                    background-color: #f0f0f0;
                    color: #333;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px 5px 0 0;
                    transition: background-color 0.3s, border-bottom 0.3s;
                ">Register</button>
            </div>

            <div id="auth-forms">
                <div id="sign-in-form" style="
                    display: none;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                ">
                    <form id="sign-in-form-element" style="
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    ">
                        <label for="sign-in-email" style="
                            font-size: 14px;
                            color: #555;
                        ">Email:</label>
                        <input type="email" id="sign-in-email" name="email" required style="
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 16px;
                        ">

                        <label for="sign-in-password" style="
                            font-size: 14px;
                            color: #555;
                        ">Password:</label>
                        <input type="password" id="sign-in-password" name="password" required style="
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 16px;
                        ">

                        <button type="submit" style="
                            padding: 10px;
                            background-color: #007BFF;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            font-size: 16px;
                            cursor: pointer;
                            transition: background-color 0.3s;
                        ">Sign In</button>
                    </form>
                </div>

                <div id="register-form" style="
                    display: none;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                ">
                    <form id="register-form-element" style="
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    ">
                        <label for="register-email" style="
                            font-size: 14px;
                            color: #555;
                        ">Email:</label>
                        <input type="email" id="register-email" name="email" required style="
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 16px;
                        ">

                        <label for="register-password" style="
                            font-size: 14px;
                            color: #555;
                        ">Password:</label>
                        <input type="password" id="register-password" name="password" required style="
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 16px;
                        ">

                        <button type="submit" style="
                            padding: 10px;
                            background-color: #007BFF;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            font-size: 16px;
                            cursor: pointer;
                            transition: background-color 0.3s;
                        ">Register</button>
                    </form>
                </div>
            </div>
        </section>
    `;

    // Event listeners for tabs
    document.getElementById('sign-in-tab').addEventListener('click', function() {
        document.getElementById('sign-in-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('sign-in-tab').style.backgroundColor = '#ffffff';
        document.getElementById('register-tab').style.backgroundColor = '#f0f0f0';
        document.getElementById('sign-in-tab').style.borderBottom = '2px solid #007BFF';
        document.getElementById('register-tab').style.borderBottom = '2px solid transparent';
    });

    document.getElementById('register-tab').addEventListener('click', function() {
        document.getElementById('sign-in-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('register-tab').style.backgroundColor = '#ffffff';
        document.getElementById('sign-in-tab').style.backgroundColor = '#f0f0f0';
        document.getElementById('register-tab').style.borderBottom = '2px solid #007BFF';
        document.getElementById('sign-in-tab').style.borderBottom = '2px solid transparent';
    });

    // Handle Sign In form submission
      // Handle Register form submission
document.getElementById('register-form-element').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registration Successful');
            document.getElementById('sign-in-tab').click(); // Switch to Sign-In after registration
        } else {
            alert(result.msg || 'Registration Failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

// Handle Sign-In form submission
document.getElementById('sign-in-form-element').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Login Successful');
            // Save the token and proceed to the next page or action
            localStorage.setItem('token', result.token);
        } else {
            alert(result.msg || 'Login Failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

    
    document.getElementById('sign-in-tab').click();
 
}
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.ok) {
                    // Clear token from localStorage
                    localStorage.removeItem('token');
                    alert('Logged out successfully');
                    // Optionally redirect to login page or home
                    window.location.href = '/';
                } else {
                    alert('Logout failed');
                }
            } catch (err) {
                console.error('Logout error:', err);
            }
        });
    }
});


  

