import { useState } from 'react'
import './App.css'

const validationChecks = [
  'Citizen data validation',
  'Application workflow tracking',
  'Service SLA monitoring',
  'RBAC by admin/commissioner/officer via Keycloak',
  'Comprehensive audit logging for all governance actions',
  'Operations show request status + workflow stage + SLA compliance',
  'Critical approvals require authorization',
  'Kafka ensures event ordering'
]

const governanceHighlights = [
  { label: 'Citizen Services', value: 'Smart governance' },
  { label: 'Public Administration', value: 'Unified command center' },
  { label: 'Decision Support', value: 'Live intelligence' },
  { label: 'Program Coverage', value: '4 integrated pillars' }
]

function App() {
  const [activeTab, setActiveTab] = useState('m1');

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">CivicPulse Nexus</h2>
        <nav>
          <button className={activeTab === 'm1' ? 'active' : ''} onClick={() => setActiveTab('m1')}>Citizen & Grievance (M1)</button>
          <button className={activeTab === 'm2' ? 'active' : ''} onClick={() => setActiveTab('m2')}>Certificates (M2)</button>
          <button className={activeTab === 'm3' ? 'active' : ''} onClick={() => setActiveTab('m3')}>Welfare (M3)</button>
          <button className={activeTab === 'm4' ? 'active' : ''} onClick={() => setActiveTab('m4')}>Governance Analytics (M4)</button>
          <button className={activeTab === 'final' ? 'active' : ''} onClick={() => setActiveTab('final')}>Governance Command</button>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Smart Governance Dashboard</h1>
          <div className="user-profile">Admin | Commissioner | Officer</div>
        </header>

        <div className="dashboard-content">
          {activeTab === 'm1' && <Milestone1 />}
          {activeTab === 'm2' && <Milestone2 />}
          {activeTab === 'm3' && <Milestone3 />}
          {activeTab === 'm4' && <Milestone4 />}
          {activeTab === 'final' && <GovernanceCommand />}
        </div>
      </main>
    </div>
  )
}

function Milestone1() {
  return (
    <div className="module">
      <h3>Citizen & Grievance Management</h3>
      <div className="stats">
        <div className="stat-card"><h4>Registered Citizens</h4><p>2.4M</p></div>
        <div className="stat-card"><h4>Grievances/Month</h4><p>12.4K</p></div>
        <div className="stat-card"><h4>Resolution Rate</h4><p>94%</p></div>
      </div>
      <div className="data-table">
        <h4>Recent Grievances</h4>
        <table>
          <thead><tr><th>ID</th><th>Citizen</th><th>Category</th><th>Status</th><th>SLA</th></tr></thead>
          <tbody>
            <tr><td>GRV-2024-847</td><td>Ramesh Kumar</td><td>Water Supply</td><td><span className="status-badge progress">In Progress</span></td><td>2 days</td></tr>
            <tr><td>GRV-2024-848</td><td>Priya Sharma</td><td>Street Light</td><td><span className="status-badge resolved">Resolved</span></td><td>0 days</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Milestone2() {
  return (
    <div className="module">
      <h3>Certificate & Permit Management</h3>
      <div className="stats">
        <div className="stat-card"><h4>Applications/Month</h4><p>24.7K</p></div>
        <div className="stat-card"><h4>Avg Approval Time</h4><p>2.4 days</p></div>
        <div className="stat-card"><h4>Certificates Issued</h4><p>847K</p></div>
      </div>
      <div className="data-table">
        <h4>Recent Applications</h4>
        <table>
          <thead><tr><th>ID</th><th>Applicant</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>APP-2024-1247</td><td>Priya Sharma</td><td>Birth Certificate</td><td><span className="status-badge approved">Approved</span></td><td><button>View</button></td></tr>
            <tr><td>APP-2024-1248</td><td>Amit Patel</td><td>Trade License</td><td><span className="status-badge pending">Pending</span></td><td><button>Review</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Milestone3() {
  return (
    <div className="module">
      <h3>Welfare & Budget Management</h3>
      <div className="stats">
        <div className="stat-card"><h4>Beneficiaries</h4><p>247K</p></div>
        <div className="stat-card"><h4>Funds Disbursed</h4><p>$24.7M</p></div>
        <div className="stat-card"><h4>Budget Utilized</h4><p>87%</p></div>
      </div>
      <div className="data-table">
        <h4>Welfare Schemes</h4>
        <table>
          <thead><tr><th>Scheme Name</th><th>Beneficiaries</th><th>Allocated</th><th>Disbursed</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>PM Awas Yojana</td><td>2,847</td><td>$2.4M</td><td>$2.1M</td><td><span className="status-badge active">Active</span></td></tr>
            <tr><td>Student Scholarship</td><td>15,000</td><td>$5.0M</td><td>$4.8M</td><td><span className="status-badge active">Active</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Milestone4() {
  return (
    <div className="module">
      <h3>Governance Analytics Dashboard</h3>
      <div className="stats">
        <div className="stat-card"><h4>Citizen SAT Score</h4><p>4.7/5</p></div>
        <div className="stat-card"><h4>SLA Compliance</h4><p>94%</p></div>
        <div className="stat-card"><h4>Revenue Generated</h4><p>$12.4M</p></div>
      </div>

      <div className="overview-grid">
        <div className="panel">
          <h4>Operational Health</h4>
          <ul>
            <li>Service availability is tracking at 99.2%</li>
            <li>Approval queue is declining by 12% month on month</li>
            <li>Inter-department response time is within target range</li>
          </ul>
        </div>
        <div className="panel">
          <h4>Performance Summary</h4>
          <ul>
            <li>Citizen satisfaction remains above benchmark</li>
            <li>Critical approvals require elevated authorization</li>
            <li>Audit trails are complete across all governance actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function GovernanceCommand() {
  return (
    <div className="module final-dashboard">
      <div className="hero-banner">
        <div>
          <p className="eyebrow">Governance Command</p>
          <h3>All integrated – Smart governance, citizen services, public administration</h3>
        </div>
        <span className="live-pill">Live Command Center</span>
      </div>

      <div className="stats final-stats">
        {governanceHighlights.map((item) => (
          <div className="stat-card" key={item.label}>
            <h4>{item.label}</h4>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="overview-grid">
        <div className="panel panel-large">
          <h4>Final Integrated Master Screens</h4>
          <div className="milestone-list">
            <div><strong>Citizen Management:</strong> M1 – Grievance, 2.4M citizens, 94% resolved, 12.4K/month</div>
            <div><strong>Certificate Management:</strong> M2 – Services, 847K issued, 2.4 days avg, 24.7K apps/month</div>
            <div><strong>Welfare Budget:</strong> M3 – Schemes, 247K beneficiaries, $24.7M disbursed, 87% utilized</div>
            <div><strong>Governance Analytics:</strong> M4 – Dashboard, 4.7/5 SAT, 94% SLA, $12.4M revenue</div>
          </div>
        </div>

        <div className="panel panel-large">
          <h4>Validation Screens Framework</h4>
          <ul className="validation-list">
            {validationChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
