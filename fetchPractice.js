/**
You are given the following URL: 

https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json

A GET request to that URL will return a JSON array (containing information about the Simpsons) that looks like this:
[
  {"label": "some-string", "color": "some-other-string", "link": "some-url"},
  {"label": "some-string", "color": "some-other-string", "link": "some-url"}
]

Using vanilla JavaScript, obtain that JSON data and sort the array items by their labels. 
Then using either vanilla JavaScript or React (already available in global scope), display the obtained data in the DOM as an ordered list. Give each link's text a color matching its "color" property. The final DOM markup should look similar to below:

<ol>
  <li><a href="some-link">some-string</a></li>
  <li><a href="some-link">some-string</a></li>
</ol>

You are expected to do all your work in the JavaScript editor (this pane) and *not* the HTML editor.

Extra question: how would you make the links open in a new browser tab?

 */

async function fetchSorted(url) {
  try {
    const data = await fetch(url);

    if (!data.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const parsed = await data.json();

    if (parsed && Array.isArray(parsed)) return sorted(parsed);
    else {
      throw new Error("Invalid data format.");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

fetchSorted(
  "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
).then((data) => {
  console.log(data);
});

const sorted = (arr) => {
  return arr.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });
};

function displayDataInDOM(data) {
  const sortedData = sorted(data);

  const ol = document.createElement("ol");

  sortedData.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.label;
    a.style.color = item.color;

    // To open links in a new browser tab, you can add the "target" attribute.
    // Uncomment the following line if you want links to open in a new tab.
    // a.target = '_blank';

    li.appendChild(a);
    ol.appendChild(li);
  });

  document.body.appendChild(ol);
}

// Call the fetchAndSortData function
fetchSorted(
  "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
).then((sortedData) => {
  if (sortedData) {
    displayDataInDOM(sortedData);
  }
});
