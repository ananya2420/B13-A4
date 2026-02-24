"# B13-A4" 
"# B13-A4" 
1. getElementById()- We can bring different kind of thing from DOM. If i get specific ID than it must give it. When If i don't get it it gave null.
   getElementByClassName()- All are getting from the class. If don't get it than it provides empty array collection.
   getElementByTagName()- Give HTML collection. If don't get it than it provides empty array collection.
   querySelector()-Give nodeList.is a DOM method used to select the first element in the document that matches a given CSS selector.
   querySelectorAll()- is a DOM method that selects all elements matching a CSS selector.

2. For creating new element- const newDiv = document.createElement('div');
   Set Content or Attributes- newDiv.innerText = "Hello World!";
   a) Insert Into the DOM- Append to a parent- const container = document.querySelector('main');
                                            container.appendChild(newDiv);
   b) Insert at the beginning- container.prepend(newDiv);
   c) Insert before a specific element- const firstCard = document.querySelector('.card');
                                        container.insertBefore(newDiv, firstCard);
   d) Insert after a specific element- firstCard.after(newDiv);

3. Event Bubbling- It is a process that always starts from deepest target element. It starts from DOM anchestor. Suppose User click the Button. means it moves from child to parent.
4.  Event Delegation-It is a technique that it add listener to parent element instead of child element. It happens because of Event Bubbling. Suppose when user click the button it set itself that place but it take upper level mwhich means parent element. Ultimately element always move from child to parent component.
5. preventDefault() → stops what the browser would normally do and stopPropagation() → stops the event from reaching other listeners in the DOM.


Live Site Link-https://ananya2420.github.io/B13-A4/
