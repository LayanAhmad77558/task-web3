const motors = [1, 2, 3, 4, 5, 6];

motors.forEach(m => {
  const slider = document.getElementById("motor" + m);
  const val = document.getElementById("val" + m);
  slider.oninput = () => val.innerText = slider.value;
});

// Reset to 90
function reset() {
  motors.forEach(m => {
    document.getElementById("motor" + m).value = 90;
    document.getElementById("val" + m).innerText = 90;
  });
}

// Save current pose
function savePose() {
  let data = {};
  motors.forEach(m => {
    data["motor" + m] = document.getElementById("motor" + m).value;
  });

  fetch("save_pose.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(res => {
      alert(res);
      loadPoses();
    });
}

// Load saved poses into a table
function loadPoses() {
  fetch("get.php")
    .then(res => res.json())
    .then(poses => {
      const container = document.getElementById("poses");
      container.innerHTML = "";

      if (poses.length === 0) {
        container.innerHTML = "<p>No saved poses yet.</p>";
        return;
      }

      const table = document.createElement("table");
      table.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Motor 1</th>
          <th>Motor 2</th>
          <th>Motor 3</th>
          <th>Motor 4</th>
          <th>Motor 5</th>
          <th>Motor 6</th>
          <th>Actions</th>
        </tr>
      `;

      poses.forEach(pose => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${pose.id}</td>
          <td>${pose.motor1}</td>
          <td>${pose.motor2}</td>
          <td>${pose.motor3}</td>
          <td>${pose.motor4}</td>
          <td>${pose.motor5}</td>
          <td>${pose.motor6}</td>
          <td>
            <button onclick="loadPose(${pose.id})">Load</button>
            <button onclick="deletePose(${pose.id})">Remove</button>
          </td>
        `;
        table.appendChild(row);
      });

      container.appendChild(table);
    });
}

// Run the current slider values
function runCurrentPose() {
  let data = {};
  motors.forEach(m => {
    data["motor" + m] = document.getElementById("motor" + m).value;
  });

  fetch("get_run_pose.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(msg => alert("Running current pose...\n" + msg));
}

// Delete pose by ID
function deletePose(id) {
  fetch("delete_pose.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // body: id=${id}
  })
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      loadPoses();
    });
}

function loadPose(id) {
  fetch("get.php?id=" + id)
    .then(res => res.json())
    .then(pose => {
      if (pose.error) {
        alert("Pose not found.");
        return;
      }
      motors.forEach(m => {
        document.getElementById("motor" + m).value = pose["motor" + m];
        document.getElementById("val" + m).innerText = pose["motor" + m];
      });
    })
    .catch(err => {
      alert("Error loading pose: " + err);
    });
}

window.onload = function () {
  loadPoses();
};
