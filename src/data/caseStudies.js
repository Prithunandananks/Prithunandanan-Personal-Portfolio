export const caseStudies = {
  aegissim: {
    problemStatement: {
      title: "The Coordination Challenge in Crisis Environments",
      text: "Emergency response scenarios represent high-concurrency environments where latency and route synchronization fail under standard setups. When crisis response entities (e.g. rescue units, ambulances, central dispatchers) act in parallel, single database bottlenecks or synchronous HTTP polling loops trigger system deadlocks. The critical engineering challenge lies in building a low-latency event system capable of propagating route states and prioritizing simulation workloads dynamically across distributed computation nodes."
    },
    systemArchitecture: [
      {
        title: "Asynchronous API routing (FastAPI)",
        desc: "Serves as the high-throughput gateway. FastAPI's async loops allow non-blocking client connections, executing coordinate lookups and simulation tasks in parallel workers.",
        icon: "Cpu",
        color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
      },
      {
        title: "Real-time Telemetry Synchronization (WebSockets)",
        desc: "Persistent full-duplex sockets manage connection pools, broadcasting localized coordinates and active status changes back to central operations dashboards within milliseconds.",
        icon: "Globe",
        color: "text-purple-400 bg-purple-400/10 border-purple-400/20"
      },
      {
        title: "Simulation State Caching (Redis)",
        desc: "Stores transient agent positions, coordinate indexes, and session locks. Serving hot data from memory bypasses disk latency and prevents DB thread pool starvation.",
        icon: "Database",
        color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
      },
      {
        title: "Asynchronous Task Routing (RabbitMQ)",
        desc: "Decouples computation-heavy routing simulations from the web server. Queues buffer routing requests and route updates, executing priority routing routines asynchronously.",
        icon: "Layers",
        color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
      },
      {
        title: "Relational State Tracking (PostgreSQL)",
        desc: "Persists structural logs, disaster configurations, and post-simulation reports with ACID guarantees, utilizing indexes on geographic bounds.",
        icon: "Database",
        color: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20"
      },
      {
        title: "Containerized Node Clusters (Docker)",
        desc: "Packages services into standalone containers, mirroring production environments locally to test distributed cluster behavior and broker failover states.",
        icon: "Layers",
        color: "text-pink-400 bg-pink-400/10 border-pink-400/20"
      }
    ],
    highlights: [
      {
        title: "Async Event Loops",
        desc: "Non-blocking event dispatching handles high concurrency without server process locking."
      },
      {
        title: "Multi-Agent Systems",
        desc: "Simulated response units update spatial coordinates dynamically based on priority queues."
      },
      {
        title: "Telemetry Broadcasting",
        desc: "WebSocket channels synchronize active simulation states to frontends in sub-100ms."
      },
      {
        title: "Idempotent Queueing",
        desc: "RabbitMQ ensures routing coordinates are processed exactly once via task message receipts."
      },
      {
        title: "Spatial Data Indexing",
        desc: "PostgreSQL GIS indexes enable fast lookup of nearby emergency incidents."
      },
      {
        title: "Distributed Coordination",
        desc: "Decoupled web gateways and simulation workers communicate seamlessly via message passing."
      }
    ],
    designDecisions: [
      {
        decision: "Why Asynchronous Web Loop?",
        rational: "Standard thread-per-request servers exhaust resources when hundreds of entities maintain open connection streams. FastAPI's single-threaded event loop processes multiple concurrent connections concurrently, ideal for WebSockets."
      },
      {
        decision: "Redis as Hot Data Store",
        rational: "Writing coordinate updates directly to a relational disk database would throttle throughput. Redis holds in-memory coordinate states, which are batch-written to PostgreSQL periodically."
      },
      {
        decision: "WebSocket Broadcasting Pool",
        rational: "Polling REST endpoints for route changes introduces high network overhead. Persistent WebSockets broadcast coordinate changes instantly to active subscribers using connection manager classes."
      }
    ]
  }
};
