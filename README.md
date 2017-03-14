# hCard

hCard Builder Development Process

1. Write HTML template to build structure, define class and id name, and add SEO elements

2. Use Javascript to implement functions, try to use efficient method to make it work

3. Slice PSD file to measure dimension between different elements of mockup, record color code

4. Apply CSS for UI rendering, adjust HTML structure

5. Add media query for responsive layout

6. Test website by different browsers (Chrome/IE/Firefox) with different versions. Test performance on mobile and tablet.

7. Fix bugs

-------------------------------------------------------

* Total development time consuming: aprox. 5hrs

* I did meet some issues like - need to use style of <button> to replace style of input[type='file'] and user still click 'input' to upload photo. The quick solution is to cover the rendered <button> by a same size/position and transparent <input> so that user can see the <button> but actually click <input>. It's not the best solution but it just works. I tried some other ways like to apply onclick function to <button> or hide <input>, none of them work. I give this example to say when I meet problem, my solution is to looking for different ways then find out the best I can do.

* There are definitely improvement spaces on my work and I'm still learning and doing some research to make it better. 
