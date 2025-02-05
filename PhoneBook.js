class PhoneBook {
    constructor() {
        this.contacts = []; 
    }   
    addContact(fullName, phoneNumber) {
        this.contacts.push({ fullName, phoneNumber });
    }
    /*
    Comparator Function((a, b) => a.fullName.localeCompare(b.fullName)):

    The sort method calls the comparator function for every pair of elements in the array.
    The comparator function must return:
    A negative value if a should come before b.
    Zero if a and b are equal(in terms of sorting order).
    A positive value if a should come after b.

    */
    sortContacts() {
        this.contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }

    // Binary search method to find a contact by full name
    binarySearch(fullName) {
        this.sortContacts(); 
        let left = 0;
        let right = this.contacts.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const comparison = fullName.localeCompare(this.contacts[mid].fullName);

            if (comparison === 0) {
                return this.contacts[mid]; 
            } else if (comparison < 0) {
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        }
       
        return null; 
    }

    // Method to display all contacts
    displayContacts() {
        this.sortContacts(); 
        this.contacts.forEach(contact =>
            console.log(`Name: ${contact.fullName}, Phone: ${contact.phoneNumber}`)
        );
    }
}


const phoneBook = new PhoneBook();

// Adding contacts
phoneBook.addContact("John Doe", "123-456-7890");
phoneBook.addContact("Jane Smith", "987-654-3210");
phoneBook.addContact("Alice Johnson", "555-123-4567");
phoneBook.addContact("Rajesh Kumar", "111-222-3333");
phoneBook.addContact("Aarav Gupta", "444-555-6666");
phoneBook.addContact("Priya Sharma", "777-888-9999");
phoneBook.addContact("Sneha Iyer", "101-202-3030");
phoneBook.addContact("Aditya Verma", "404-505-6060");
phoneBook.addContact("Lakshmi Nair", "707-808-9090");
phoneBook.addContact("Vikram Choudhary", "123-321-4567");

// Searching for a contact
const searchResult = phoneBook.binarySearch("Lakshmi Nair");

if (searchResult) {
    console.log(`Contact found: Name: ${searchResult.fullName}, Phone: ${searchResult.phoneNumber}`);
} else {
    console.log("Contact not found.");
}

console.log("All Contacts:");
phoneBook.displayContacts();