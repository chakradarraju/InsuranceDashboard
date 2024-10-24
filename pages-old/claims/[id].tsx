import React, { useState } from "react";
import { useRouter } from "next/router";

const ClaimsPage: React.FC = () => {
  const router = useRouter();
  const [notes, setNotes] = useState("");
  const [checked, setChecked] = useState(false);
  const [randomNumber1, setRandomNumber1] = useState(
    Math.floor(Math.random() * 100),
  );
  const [randomNumber2, setRandomNumber2] = useState(
    Math.floor(Math.random() * 100),
  );

  return (
      <div>
        {/* Tab Bar */}
        <div className="tab-bar">
          <button>Claim {router.query.id}</button>
          <button>Policy</button>
          <button>Customer</button>
          <button>Appraisals</button>
          <button>Litigation</button>
          <button>Fraud</button>
          <button>Leakages</button>
          <button>Network</button>
        </div>

        {/* Customer Section */}
        <div className="customer-section">
          <img src="customer-placeholder.jpg" alt="Customer" />
          <p>Customer Name: John Doe</p>
        </div>

        {/* Claim Processing Timeline */}
        <div className="claim-timeline">
          <h2>Claim Processing Timeline</h2>
          <ul>
            <li>FNOL</li>
            <li>Appraisal</li>
            <li>Repair</li>
            <li>Settlement</li>
          </ul>
        </div>

        {/* Add Note Section */}
        <div className="add-note">
          <h2>Add Note</h2>
          <textarea
            placeholder="Add your notes here"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Random Satellite Image */}
        <div className="satellite-image">
          <h3>Random Satellite Image</h3>
          <img src="satellite-placeholder.jpg" alt="Satellite" />
        </div>

        {/* Previous Claims Section */}
        <div className="previous-claims">
          <h2>Previous Claims</h2>
          <div>
            <input type="number" value={randomNumber1} readOnly />
            <input type="number" value={randomNumber2} readOnly />
            <button onClick={() => setChecked(!checked)}>Check</button>
            <p>{checked ? "Checked" : "Unchecked"}</p>
          </div>
        </div>
      </div>
  );
};

export default ClaimsPage;
