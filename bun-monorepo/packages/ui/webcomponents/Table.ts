class KHeader extends HTMLElement {
  connectedCallback() {
    // No need to create a table header here, it will be done by KTable
  }
}

customElements.define("k-header", KHeader);

class KRow extends HTMLElement {
  connectedCallback() {
    // No need to create a table row here, it will be done by KTable
  }
}

customElements.define("k-row", KRow);

class KTable extends HTMLElement {
  constructor() {
    super();
    this.sortedAscending = true;
  }

  connectedCallback() {
    this.renderTable();
  }

  renderTable() {
    // Create a table element
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Get the k-header element inside the <k-table> element
    const header = this.querySelector("k-header");
    if (header) {
      const tr = document.createElement("tr");
      const cell = document.createElement("th");
      cell.colSpan = header.getAttribute("colspan") || "1";
      cell.textContent = header.textContent;
      cell.style.cursor = "pointer";
      cell.addEventListener("click", () => this.sortTable());
      tr.appendChild(cell);
      thead.appendChild(tr);
    }

    // Get all the k-row elements inside the <k-table> element
    let rows = Array.from(this.querySelectorAll("k-row"));

    // Sort rows based on the current sort direction
    rows.sort((a, b) => {
      const textA = a.textContent.trim();
      const textB = b.textContent.trim();
      if (this.sortedAscending) {
        return textA.localeCompare(textB);
      } else {
        return textB.localeCompare(textA);
      }
    });

    // Append each k-row as a table row
    rows.forEach((row) => {
      const tr = document.createElement("tr");
      const cell = document.createElement("td");
      cell.textContent = row.textContent;
      tr.appendChild(cell);
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    // Clear existing content and append the table
    this.innerHTML = "";
    this.appendChild(table);
  }

  sortTable() {
    // Toggle the sort direction
    this.sortedAscending = !this.sortedAscending;
    // Re-render the table with sorted rows
    this.renderTable();
  }
}

customElements.define("k-table", KTable);

export { KHeader, KRow, KTable };
