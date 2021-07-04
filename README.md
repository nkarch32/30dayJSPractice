# 30dayJSPractice
Notes, findings, observations, brainstorms, connections, predictions, etc. relating to the exercises will go into this readme file.

<h3><strong> Day 6: Ajax Type Ahead Notes </strong></h3>
<h4>
  <p><strong>Regular expression (regex):</strong> used to find matches in strings</p>
  <p><strong>Constructor:</strong> creates instance of a class, which is typically called an object; gets called when you declare an object using the 'new' keyword</p>
  <p><strong>.match():</strong> a very useful method; with 'regex' variable as argument, this method will find matches in an array according to the specified string pattern</p>
</h4>
<br/>
<h3><strong> Day 7: Array Cardio Day #2 Notes </strong></h3>
<h4>
  <p><strong>array.prototype.every()</strong>: an array method that checks to see whether every element in an array meets the requirements of the function given to the method </p>
  <p><strong>array.prototype.find()</strong>: an array method similar to the array.prototype.filter() method; however, instead of returning a subset, find() returns the first element it finds; takes a function as an argument</p>
  <p><strong>array.prototype.some()</strong>: an array method that checks whether at least one element in an array meets the requirement of the function passed in as an argument</p>
  <p><strong>array.prototype.findIndex()</strong>: an array method that finds the index number of whatever argument you give it</p>
  <p><strong>Date object</strong>: here is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">link</a>, for future reference as I code, because the Date object is incredibly useful
</h4>
<br/>
<h3><strong> Day 8: Fun With HTML5 Canvas Notes </strong></h3>
<h4><i>*Idea: create a canvas program with buttons that trigger different effects (i.e. globalCompositeOperation effects).*</i></h4>

<h4>
  <p><strong>Array Destructuring to set Variables:</strong></p>
  <p><strong>HTMLCanvasElement.getContext()</strong>: this method returns a drawing context on a canvas (i.e., you can draw on a portion of the dom).</p>
  <p><strong>HTML Canvas Methods:</strong> this <a href="https://www.w3schools.com/tags/ref_canvas.asp"> link</a> from w3schools illustrates different HTML canvas methods, including strokeStyle, offsetX, offsetY, etc.</p>
</h4>

<h3><strong>Day 11: Custom HTML5 Video Player</strong></h3>
<h4>
  <ul>
    <li>data-skip attribute -- what other data attributes are there for button elements?</li>
    <li>querySelector v. .getElementById?</li>
    <li>player.querySelectorAll('[data-skip]'); -- brackets indicate an attribute</li>
    <li>parseFloat() --> converts string to number value</li>
  </ul>
 </h4>
  
<h3><strong>Day 12: Key Sequence Detection</strong></h3>
<h4>
  <ul>
    <li>i.e., Konami Code that, when entered, triggers an interesting Easter Egg on webpages</li>
    <li>review .push, .splice, .join methods</li>
    <li>cornify_add() --> amazing</li>
  </ul>
 </h4>

<h3><strong>Day 14: Javascript references v. copies</strong></h3>
<h4>Some handy ways to copy arrays without altering the original arrays:
   <ul>
    <li>const copyOfOriginalArray1 = originalArray.slice();</li>
    <li>const copyOfOriginalArray2 = [].concat(originalArray);</li>
    <li>const copyOfOriginalArray3 = [...originalArray];</li>
  </ul>
  To copy an object with simple, unnested properties:
  <ul>
    <li>const copyOfOriginalObject = Object.assign({}, originalObject, { whateverPropertyYouWishToChange: 'thisWillNotChangeTheOriginalObject' };</li>
  </ul>
 </h4>
