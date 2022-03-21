/* jsSlim
 * by james houx - 2022-3-21 */
/* https://dev.to/jochemstoel/re-implementing-jquery-methods-in-the-htmlelement-prototype-15b9 */
/* note that the link above has an example of event emission using modenr js */

/* https://dev.to/qm3ster/comment/7cka -- WARNING NOTE ABOUT APPEND AND PREPEND */

/* https://ehsangazar.com/optimizing-javascript-event-listeners-for-performance-e28406ad406c */

function cLog(s) 		{ console.log(s); }

function $a(q, ctx = document)			{ return ctx.querySelectAll(q); }		//ctx is an element.  $$ is jQuery equivallent.
function $f(q, ctx = document)			{ return ctx.querySelect(q); } 			//ctx is an element.  $ is jQuery equivallent.

HTMLElement.prototype.onClick 		= function(f) 	{ this.addEventListener('click',  f); }
HTMLElement.prototype.onChange 		= function(f) 	{ this.addEventListener('change',  f); }

HTMLElement.prototype.addClass		= function (cls) { this.classList.add(cls); return this; }
HTMLElement.prototype.removeClass 	= function (cls) { this.classList.remove(cls); return this; }
HTMLElement.prototype.toggleClass 	= function (cls) { this.classList.toggle(cls); return this; }

HTMLElement.prototype.html 			= function (string) { if (string == undefined) return this.innerHTML; else this.innerHTML = string; return this; } 		// get/set html on an element
HTMLElement.prototype.text 			= function () 		{ return this.textContent; }   	// get text on an element

HTMLElement.prototype.hasAttr 		= function (attribute) 	{ return this.hasAttribute(attribute); }
HTMLElement.prototype.attr 			= function (key) 		{ return this.getAttribute(key); }
//HTMLElement.prototype.attributes = vanilla js gets all attributes
HTMLElement.prototype.setAttr 		= function (key, value) { this.setAttribute(key, value); return this; }
HTMLElement.prototype.removeAttr 	= function (key) 		{ this.removeAttribute(key); return this; }


HTMLElement.prototype.parent 				= function () 	{ return this.parentNode; }
HTMLElement.prototype.remove 				= function() 			{ this.parentNode.removeChild(this) }
HTMLElement.prototype.insertBeforeSibling 	= function (sibling) 	{ this.parentNode.insertBefore(sibling, this); return this; }
//srcNode.appendChild == vanilla js. Adds a newnode to the end of the srcNode's child list.


/* DROPDOWN BOX HELPERS */

function ddSelectedDisplayText(dropdownElement) => dropdownElement.options[dropdownElement.selectedIndex].text;
function ddSelectedValue(dropdownElement)		=> dropdownElement.value;

HTMLElement.prototype.data = function (key) { return this.dataset[key]; }
HTMLElement.prototype.setData = function (key, value) { this.dataset[key] = value; return this; }
//HTMLElement.prototype.dataset	= vanilla js. returns the whole data set dictionary.

/**
 * This allows you to "forEach" a NodeList returned by querySelectorAll or $$
 * similar to jQuery.prototype.each
 * use: $$('li').each(callback)
 * 
 * NOTE: I Don't think there's any benefit to this function. 
Object.defineProperty(NodeList.prototype, 'each', {
    value: function (fn) {
        return Array.from(this).forEach((node, index) => fn(node, index))
    }
})*/