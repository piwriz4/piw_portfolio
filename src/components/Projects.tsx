import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Cpu, Expand, Globe, Layers, X } from 'lucide-react';
import edge1Image from '@/assets/project_iot/edge1.png';
import edge2Image from '@/assets/project_iot/edge2.png';
import dash1Image from '@/assets/project_iot/dash1.png';
import dash2Image from '@/assets/project_iot/dash2.png';
import dash3Image from '@/assets/project_iot/dash3.png';
import dash4Image from '@/assets/project_iot/dash4.png';
import robotMainDashImage from '@/assets/project_robotdashboard/maindash.jpeg';
import robotRecipeImage from '@/assets/project_robotdashboard/recipeforqueueing.jpeg';
import robotLogImage from '@/assets/project_robotdashboard/robotlog.jpeg';
import robotFallbackImage from '@/assets/project_robotdashboard/fallbackplace.jpeg';
import robotMapImage from '@/assets/project_robotdashboard/mapnotdeployed.jpeg';
import masterRobotImage from '@/assets/project_masterdegree/robot.jpeg';
import masterArchitectureImage from '@/assets/project_masterdegree/systemarchitecture.png';
import masterSlamImage from '@/assets/project_masterdegree/slamgenerated.png';
import masterDetectionImage from '@/assets/project_masterdegree/ObjectDetection.png';
import masterSemanticMapImage from '@/assets/project_masterdegree/sematicmatplotlib.png';
import underChamberImage from '@/assets/project_undergraduate/chamberukur.png';
import underDataImage from '@/assets/project_undergraduate/data.png';
import underTrendImage from '@/assets/project_undergraduate/datatren.png';
import underPlacementImage from '@/assets/project_undergraduate/penempatanalatukur.png';
import underShelterImage from '@/assets/project_undergraduate/shelteralatukur.png';
import underSensitivityImage from '@/assets/project_undergraduate/ujisensitivitassensor.png';

type ProjectGalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  phase: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  contribution: string;
  image: string;
  icon: typeof Cpu;
  tech: string[];
  frameworks?: string[];
  highlight?: string;
  detailTitle?: string;
  detailSummary?: string;
  detailPoints?: string[];
  detailFeatures?: string[];
  gallery?: ProjectGalleryItem[];
};

const projects: Project[] = [
  {
    title: 'IoT Vision Edge & KPI Dashboard',
    category: 'Professional',
    description:
      'Built an end-to-end production monitoring system that uses You Only Look Once (YOLO)-based computer vision to track object movement across configurable Region of Interest (ROI) zones and automatically calculate operator cycle time, then exposes Key Performance Indicator (KPI) evaluation dashboards for supervisors.',
    frameworks: [
      'Ultralytics YOLO',
      'OpenCV',
      'PySide6',
      'Flask',
      'aiortc',
      'React',
      'Express',
      'React Router',
      'React Chart.js 2',
      'Chart.js',
      'Tailwind CSS',
      'Pion WebRTC',
    ],
    tech: [
      'Python',
      'PyTorch',
      'TensorRT',
      'ONNX Runtime',
      'NumPy',
      'Polars',
      'Vite',
      'MQTT',
      'Socket.IO',
      'PostgreSQL',
      'JavaScript',
      'Node.js',
      'Go',
      'WebRTC',
      'BLE',
      'AV',
      'ExcelJS',
      'REST API',
    ],
    contribution:
      'Developed the edge application for Region of Interest (ROI)-based cycle-time detection, multi-camera operation, and production tooling, then built the dashboard layer for Key Performance Indicator (KPI) review, trend analysis, and supervisor monitoring.',
    highlight:
      'You Only Look Once (YOLO)-based object movement tracking across Region of Interest (ROI)-to-Region of Interest (ROI) transitions for automatic cycle-time measurement, backed by production tools and Key Performance Indicator (KPI) analytics.',
    detailTitle: 'Internet of Things (IoT) Vision Edge & Key Performance Indicator (KPI) Dashboard',
    detailSummary:
      'This project combines two internal systems into one workflow. The edge application processes live camera feeds to detect operator and object movement with You Only Look Once (YOLO), evaluates transitions between configured Region of Interest (ROI) areas, and turns those events into automatic cycle-time records. On top of that, the dashboard provides Key Performance Indicator (KPI) visibility for supervisors so line performance can be reviewed without manual stopwatch checks.',
    detailPoints: [
      'The main logic measures object or operator movement from one Region of Interest (ROI) to another so each work cycle can be timed automatically.',
      'In production deployment, the system runs across 12 PCs on separate lines. Each line uses 3 cameras to monitor 7 operators, while 1 dedicated server PC manages the database and runs the dashboard layer.',
      'The edge side was designed for real production use, including multi-camera monitoring, operator identification, and stable deployment tooling.',
      'The dashboard side transforms raw cycle-time events into Key Performance Indicator (KPI) views for supervisor evaluation and trend monitoring.',
    ],
    detailFeatures: [
      'Region of Interest (ROI) Tool for setup, adjustment, and recalibration on production lines',
      'You Only Look Once (YOLO)-based computer vision detection for object and operator activity',
      'Cycle Time calculation from ROI transition events',
      'Multi-operator and multi-camera monitoring workflow',
      'Production dashboard for Key Performance Indicator (KPI) review, trend analysis, and performance evaluation',
    ],
    gallery: [
      {
        src: edge1Image,
        alt: 'Edge monitoring interface with multi-camera production view',
        title: 'Edge Monitoring Workspace',
        description: 'The production-side application monitors live camera feeds and operator activity in real time, becoming the main workspace for cycle-time tracking on the line.',
        phase: 'Edge Application',
      },
      {
        src: edge2Image,
        alt: 'ROI-based cycle-time detection interface on the edge system',
        title: 'ROI-Based Detection Flow',
        description: 'This screen shows how object or operator movement is evaluated across configured Region of Interest (ROI) areas to determine the start and end of each work cycle.',
        phase: 'Edge Application',
      },
      {
        src: dash1Image,
        alt: 'Supervisor dashboard overview for KPI monitoring',
        title: 'Supervisor KPI Overview',
        description: 'The dashboard gives supervisors a high-level view of production performance so they can quickly understand overall line conditions and operator trends.',
        phase: 'Dashboard',
      },
      {
        src: dash2Image,
        alt: 'Dashboard analytics view for cycle-time trends',
        title: 'Cycle-Time Trend Analysis',
        description: 'Cycle-time records collected from the edge application are turned into trend visualizations that support evaluation, comparison, and follow-up actions.',
        phase: 'Dashboard',
      },
      {
        src: dash3Image,
        alt: 'Dashboard detail screen for performance review',
        title: 'Detailed Performance Review',
        description: 'Supervisors can review detailed performance data to identify bottlenecks, deviations, and areas where operator support or process adjustment may be needed.',
        phase: 'Dashboard',
      },
      {
        src: dash4Image,
        alt: 'Dashboard reporting interface for production insights',
        title: 'PC Monitoring & Remote Control',
        description: 'This dashboard view helps monitor production PCs and supports remote actions such as shutting down the application or powering off the PC when operational intervention is needed.',
        phase: 'Dashboard',
      },
    ],
    image: edge1Image,
    icon: Cpu,
  },
  {
    title: 'AMR Queueing & Robot Operations Dashboard',
    category: 'Professional',
    description:
      'Built a robot operations dashboard on top of Pudu Open Server to turn a single-destination pager trigger into a queueing workflow, allowing the robot to continue from the pager point to 3-5 downstream destinations while operators monitor status, journey progress, and execution logs in real time.',
    frameworks: [
      'Pudu Open Server',
      'Express',
      'Socket.IO',
      'PostgreSQL',
    ],
    tech: [
      'JavaScript',
      'Node.js',
      'HTML',
      'CSS',
      'MQTT',
      'Axios',
      'ExcelJS',
      'REST API',
      'Mosquitto',
      'CSV Export',
      'XLSX Export',
      'Industrial AMR',
    ],
    contribution:
      'Designed the queueing logic, robot status workflow, journey recipe management, and robot log reporting layer so the AMR fleet could operate beyond the hardware pager limitation with clearer operational visibility.',
    highlight:
      'An orchestration dashboard that bridges physical pager calls and software-defined multi-stop robot journeys, complete with active recipe control, warning handling, completion tracking, and log export.',
    detailTitle: 'Pudu Open Server Queueing System & Robot Log Dashboard',
    detailSummary:
      'This system was built to extend a Pudu robot deployment that used an additional pager device capable of calling the robot to only one point. The dashboard adds the missing orchestration layer: once the robot reaches the pager point, it automatically continues through a configured list of downstream destinations. On top of that, the interface gives operators a practical control room for real-time robot status, recipe activation, warning visibility, safe-place recovery, and robot journey history.',
    detailPoints: [
      'The queueing concept starts from a pager point as the first trigger, then continues automatically to a stack of 3-5 destination points defined in each recipe.',
      'The home page focuses on operational visibility, showing each robot status, current target, remaining journey, and journey outcomes such as warning, failed, or completed.',
      'The recipe section manages the journey definitions, where the first point is the pager location and the following points become the post-pager delivery sequence.',
      'The robot log module records execution history for review and export, giving the team traceability when a journey succeeds, is cancelled, or fails.',
      'A prototype robot map was also prepared to visualize movement and position updates, although that monitoring view had not yet been deployed to the production site.',
    ],
    detailFeatures: [
      'Pager-triggered queueing workflow built on top of Pudu Open Server APIs',
      'Multi-stop continuation from pager point to 3-5 downstream destinations',
      'Robot home dashboard with live status, current target, warning, and completed journey states',
      'Recipe management for pager points, destination stacking, activation, and validation',
      'Robot log history with filters, export, and failure tracking',
      'Safe-place assignment and recovery workflow for exception handling',
      'Prototype live map for movement monitoring and position visibility',
    ],
    gallery: [
      {
        src: robotMainDashImage,
        alt: 'Main robot dashboard showing robot status and active journeys',
        title: 'Operations Home Dashboard',
        description: 'The main dashboard gives operators a real-time view of robot status, current target, remaining journey, and the overall state of active queue execution.',
        phase: 'Operations',
      },
      {
        src: robotRecipeImage,
        alt: 'Recipe management screen for queueing routes',
        title: 'Queue Recipe Management',
        description: 'Recipes are defined with the pager point as the first trigger and a stacked list of downstream destinations so the robot can continue automatically after the initial hardware call.',
        phase: 'Queueing Logic',
      },
      {
        src: robotLogImage,
        alt: 'Robot log dashboard with filtering and export tools',
        title: 'Robot Log and Reporting',
        description: 'The logging module captures journey history, status outcomes, and failure context so operations teams can review results and export records when needed.',
        phase: 'Monitoring',
      },
      {
        src: robotFallbackImage,
        alt: 'Safe-place assignment and fallback management for robots',
        title: 'Safe-Place Recovery Controls',
        description: 'Each robot can be assigned a fallback safe place, helping the system recover more gracefully when a journey is interrupted or needs exception handling.',
        phase: 'Reliability',
      },
      {
        src: robotMapImage,
        alt: 'Prototype robot map for movement monitoring',
        title: 'Prototype Live Map',
        description: 'A map-based monitoring prototype was prepared to visualize robot movement and position updates, ready as a future operational enhancement even though it was not deployed on the live site.',
        phase: 'Prototype',
      },
    ],
    image: robotMainDashImage,
    icon: Layers,
  },
  {
    title: 'Semantic Mapping via Camera and LiDAR Fusion',
    category: "Academic (Master's)",
    description:
      'Developed a semantic mapping system that fuses camera detections and LiDAR measurements to estimate object position and size, then places those semantic markers directly onto a SLAM-generated map in real time on a low-cost mobile robot platform.',
    frameworks: [
      'ROS',
      'YOLOv3',
      'Gmapping',
      'OpenCV',
    ],
    tech: [
      'Python',
      'LiDAR',
      'RGB Camera',
      'Bounding Box Geometry',
      'Sensor Fusion',
      'Occupancy Grid Map',
      'Jetson Nano',
      'Arduino Mega',
      'Odometry Encoder',
      'CSV Export',
      'Low-Cost Mobile Robot',
    ],
    contribution:
      'Designed the end-to-end sensor data integration workflow, including object detection, bounding-box and LiDAR-based size estimation, global coordinate transformation, and semantic marker insertion on top of the SLAM map.',
    highlight:
      'The core innovation was combining image-space bounding boxes with LiDAR range data so the robot could not only detect objects, but also estimate their dimensions and store those semantic estimates directly inside the mapping pipeline.',
    detailTitle: 'Master’s Thesis: Semantic Map Generation via Camera and LiDAR Fusion',
    detailSummary:
      'This thesis focused on building a real-time semantic mapping pipeline for indoor mobile robots by fusing camera and LiDAR data. The system first generates the geometric map with SLAM, then enriches that map with semantic object information obtained from deep-learning-based detection. A key part of the work was integrating bounding-box output from the vision model with LiDAR range measurements to estimate object size and map position, allowing the robot to store object-level semantic markers directly on the generated map rather than treating perception and mapping as separate outputs.',
    detailPoints: [
      'The main contribution was sensor data integration: camera detections provided object class and bounding boxes, while LiDAR and odometry data were used to estimate object distance, size, and final global position on the map.',
      'The system was designed to estimate object dimensions from bounding-box geometry combined with LiDAR measurements, making the semantic map more informative than a class-only overlay.',
      'Detected objects were inserted directly into the SLAM-generated occupancy map, producing a semantic map that combined geometric structure with labeled environmental context.',
      'The implementation ran on a low-cost robot platform using practical components such as Jetson Nano, Arduino Mega, RGB camera, LiDAR, and wheel encoder odometry.',
      'The overall workflow also supported result storage for further validation and analysis, including semantic output and grid-related data export.',
    ],
    detailFeatures: [
      'Camera and LiDAR fusion for real-time semantic mapping',
      'Bounding-box and LiDAR-based object size estimation',
      'Global coordinate transformation from local sensor observations',
      'Semantic marker placement directly on top of the SLAM occupancy map',
      'Object detection integrated with Gmapping-based map generation',
      'Low-cost mobile robot deployment with Jetson Nano and Arduino-based control',
      'Semantic and grid data export for post-analysis and validation',
    ],
    gallery: [
      {
        src: masterRobotImage,
        alt: 'Low-cost mobile robot platform with LiDAR, camera, Jetson Nano, and encoder',
        title: 'Low-Cost Robot Platform',
        description: 'The thesis was implemented on a practical low-cost mobile robot equipped with a LiDAR, RGB camera, Jetson Nano, Arduino Mega, and odometry encoder for real-world semantic mapping experiments.',
        phase: 'Robot Platform',
      },
      {
        src: masterArchitectureImage,
        alt: 'System architecture for semantic mapping using camera and LiDAR fusion',
        title: 'Sensor Data Integration Architecture',
        description: 'This architecture shows how LiDAR, camera, and encoder data were processed through ROS nodes so SLAM, object detection, and object marker generation could work together as one semantic mapping pipeline.',
        phase: 'Architecture',
      },
      {
        src: masterSlamImage,
        alt: 'SLAM-generated occupancy grid map of the indoor environment',
        title: 'Geometric Map from SLAM',
        description: 'The geometric base map was generated with Gmapping and used as the spatial foundation before semantic object information was overlaid onto the environment representation.',
        phase: 'SLAM',
      },
      {
        src: masterDetectionImage,
        alt: 'Object detection results from the vision model in indoor scenes',
        title: 'Object Detection Results',
        description: 'The vision subsystem detected objects such as doors, bicycles, trash cans, and other indoor items, producing the bounding boxes that were later fused with LiDAR data for semantic mapping.',
        phase: 'Perception',
      },
      {
        src: masterSemanticMapImage,
        alt: 'Final semantic map visualization with detected object markers',
        title: 'Final Semantic Map',
        description: 'The final output combined the SLAM map with object labels and estimated locations, showing how semantic information could be stored directly on the robot’s environment map for richer navigation context.',
        phase: 'Final Output',
      },
    ],
    image: masterRobotImage,
    icon: Layers,
  },
  {
    title: 'Real-Time Atmospheric Gas Monitoring System',
    category: "Academic (Bachelor's)",
    description:
      'Designed and built a real-time gas measurement instrument for SO2 and HCl monitoring, combining environmental sensors, IoT connectivity, and multi-parameter trend analysis to study pollutant behavior across different measurement heights.',
    frameworks: [
      'Arduino IoT Cloud',
      'Antares IoT Platform',
    ],
    tech: [
      'Arduino WiFi',
      'SO2 Sensor',
      'HCl Sensor',
      'DHT22',
      'Wind Speed Sensor',
      'Wind Direction Sensor',
      'Real-Time Telemetry',
      'Datalogger',
      'Wi-Fi',
      'Environmental Monitoring',
    ],
    contribution:
      'Led the instrument design and measurement workflow, from chamber and shelter construction to sensor integration, cloud-connected data delivery, and analysis of pollutant trends across stations at different elevations.',
    highlight:
      'The project emphasized practical field instrumentation: a custom-built gas monitoring device that could measure pollutant concentration and supporting meteorological variables in real time, then use that data to compare environmental behavior at multiple heights.',
    detailTitle: 'Undergraduate Thesis: Real-Time Atmospheric Gas Monitoring System',
    detailSummary:
      'This undergraduate project focused on the design and implementation of a real-time atmospheric gas monitoring instrument for measuring SO2 and HCl concentration together with supporting meteorological parameters such as temperature, humidity, wind speed, and wind direction. Beyond building the device itself, the project used IoT connectivity so measurements could be monitored continuously, stored for backup, and analyzed to understand pollutant trends and differences between stations positioned at multiple elevations.',
    detailPoints: [
      'The main focus was the design and build of the measurement instrument, including the chamber, shelter, gas sensing elements, and supporting meteorological sensors for field deployment.',
      'The system transmitted measurement data through Wi-Fi to an IoT platform for real-time monitoring, while also keeping offline records through a datalogger as backup.',
      'The analysis did not stop at raw sensing: collected data was used to observe pollutant trends over time and to compare how gas concentration behaved across stations placed at different heights.',
      'A key finding highlighted how the higher measurement point tended to capture different pollutant behavior than lower stations, supporting altitude-based environmental comparison.',
      'The project also included sensitivity testing and field validation to confirm that the sensing setup responded meaningfully to gas-emission scenarios.',
    ],
    detailFeatures: [
      'Custom-designed gas measurement chamber and outdoor shelter',
      'Real-time SO2 and HCl monitoring with supporting meteorological sensing',
      'IoT-based remote telemetry and cloud monitoring',
      'Offline backup logging for measurement reliability',
      'Trend analysis across time-series environmental data',
      'Comparison of pollutant behavior across multiple measurement heights',
      'Sensitivity testing for gas sensor response validation',
    ],
    gallery: [
      {
        src: underShelterImage,
        alt: 'Real-time atmospheric gas monitoring instrument deployed outdoors',
        title: 'Field-Deployed Monitoring Instrument',
        description: 'This was the main deployed system for real-time SO2 and HCl measurement, combining gas sensing, meteorological sensing, and outdoor-ready instrument packaging.',
        phase: 'Deployment',
      },
      {
        src: underChamberImage,
        alt: 'Measurement chamber design for the gas monitoring instrument',
        title: 'Measurement Chamber Design',
        description: 'The chamber was designed to house the sensing components in a controlled measurement enclosure while supporting practical outdoor operation inside the larger shelter system.',
        phase: 'Instrument Design',
      },
      {
        src: underSensitivityImage,
        alt: 'Sensor sensitivity test setup and experiment documentation',
        title: 'Sensor Sensitivity Validation',
        description: 'A dedicated sensitivity test was carried out to verify that the gas sensing setup responded to emission sources in a meaningful and measurable way before broader field analysis.',
        phase: 'Validation',
      },
      {
        src: underDataImage,
        alt: 'Multi-parameter atmospheric gas monitoring data over time',
        title: 'Multi-Parameter Monitoring Results',
        description: 'The collected dataset combined SO2, HCl, and supporting meteorological variables, enabling continuous observation of environmental behavior across the monitoring period.',
        phase: 'Monitoring Data',
      },
      {
        src: underTrendImage,
        alt: 'Trend analysis of gas concentration and meteorological conditions',
        title: 'Trend and Event Analysis',
        description: 'This analysis view highlights how gas concentration trends changed alongside environmental conditions, helping interpret pollutant behavior rather than only recording measurements.',
        phase: 'Analysis',
      },
      {
        src: underPlacementImage,
        alt: 'Placement of measurement stations across multiple elevations',
        title: 'Multi-Height Measurement Placement',
        description: 'Measurements were compared across stations positioned at different heights, allowing the study to examine how pollutant concentration patterns varied with elevation.',
        phase: 'Field Study',
      },
    ],
    image: underShelterImage,
    icon: Globe,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [showGalleryDots, setShowGalleryDots] = useState(false);
  const [renderGalleryDots, setRenderGalleryDots] = useState(false);
  const [isImageFocusMode, setIsImageFocusMode] = useState(false);

  const galleryLength = selectedProject?.gallery?.length ?? 0;
  const hasMultipleGalleryItems = galleryLength > 1;

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setSelectedGalleryIndex(0);
    setShowGalleryDots(false);
    setRenderGalleryDots(false);
    setIsImageFocusMode(false);
  };

  const revealGalleryDotsTemporarily = () => {
    setRenderGalleryDots(true);
    setShowGalleryDots(true);
  };

  const showPreviousGalleryItem = () => {
    if (!selectedProject?.gallery?.length) return;

    revealGalleryDotsTemporarily();
    setSelectedGalleryIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  const showNextGalleryItem = () => {
    if (!selectedProject?.gallery?.length) return;

    revealGalleryDotsTemporarily();
    setSelectedGalleryIndex((currentIndex) =>
      Math.min(currentIndex + 1, selectedProject.gallery!.length - 1),
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isImageFocusMode) {
          setIsImageFocusMode(false);
        } else {
          setSelectedProject(null);
        }
        return;
      }

      if (!selectedProject.gallery || selectedProject.gallery.length <= 1) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        revealGalleryDotsTemporarily();
        setSelectedGalleryIndex((currentIndex) => Math.max(currentIndex - 1, 0));
      }

      if (event.key === 'ArrowRight') {
        revealGalleryDotsTemporarily();
        setSelectedGalleryIndex((currentIndex) =>
          Math.min(currentIndex + 1, selectedProject.gallery!.length - 1),
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageFocusMode, selectedProject]);

  useEffect(() => {
    if (!showGalleryDots) return;

    const timeoutId = window.setTimeout(() => {
      setShowGalleryDots(false);
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [showGalleryDots, selectedGalleryIndex]);

  useEffect(() => {
    if (showGalleryDots) {
      setRenderGalleryDots(true);
      return;
    }

    if (!renderGalleryDots) return;

    const timeoutId = window.setTimeout(() => {
      setRenderGalleryDots(false);
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [renderGalleryDots, showGalleryDots]);

  return (
    <>
      <section id="projects" className="py-20 sm:py-24 tech-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <h2 className="section-kicker">02 // Portfolio</h2>
              <h3 className="section-title text-3xl sm:text-4xl">
                Featured <span className="section-title-accent">Projects</span>
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              A selection of my work in robotics software, IoT systems, and intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col tech-border bg-white/72 backdrop-blur-sm border-white/40 overflow-hidden group">
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="relative aspect-video overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    aria-label={`View details for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 saturate-110 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-cyan-100/10" />
                    <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                      <Badge variant="secondary" className="bg-background/85 backdrop-blur-md border-white/10 px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:py-1 sm:text-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-xs font-medium text-white">
                      <span className="rounded-full bg-slate-950/45 px-3 py-1 backdrop-blur-sm">Click image for details</span>
                      <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">Preview</span>
                    </div>
                  </button>

                  <CardHeader className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon className="w-4 h-4 text-primary" />
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest">System_Module</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-800 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Key Contribution</p>
                      <p className="text-xs italic text-slate-700">{project.contribution}</p>
                    </div>

                    {project.highlight && (
                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Project Summary</p>
                        <p className="text-xs text-slate-700 leading-relaxed">{project.highlight}</p>
                      </div>
                    )}

                    {project.frameworks && (
                      <div className="space-y-2 pt-1">
                        <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                          {project.frameworks.map((framework) => (
                            <Badge key={framework} variant="secondary" className="text-[10px] font-mono py-0.5 px-2 bg-primary/10 text-primary border-transparent">
                              {framework}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Supporting Stack</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px] font-mono py-0.5 px-2 border-white/10">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 border-t border-white/5 mt-2 flex justify-between items-center gap-3 px-5 py-4 sm:px-6">
                    <span className="text-xs text-muted-foreground">Private repository intentionally hidden</span>
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                    >
                      View Details
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/65 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
        >
          <div className="flex min-h-full items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative my-4 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <button
                type="button"
                onClick={() => setIsImageFocusMode(true)}
                className="h-full w-full"
                aria-label="Focus image"
              >
                <img
                  src={selectedProject.gallery?.[selectedGalleryIndex]?.src || selectedProject.image}
                  alt={selectedProject.gallery?.[selectedGalleryIndex]?.alt || selectedProject.title}
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              {hasMultipleGalleryItems && (
                <>
                  {selectedGalleryIndex > 0 && (
                    <button
                      type="button"
                      onClick={showPreviousGalleryItem}
                      className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-lg transition-colors hover:bg-white sm:left-4 sm:h-11 sm:w-11"
                      aria-label="Show previous image"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  )}
                  {selectedGalleryIndex < galleryLength - 1 && (
                    <button
                      type="button"
                      onClick={showNextGalleryItem}
                      className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-lg transition-colors hover:bg-white sm:right-4 sm:h-11 sm:w-11"
                      aria-label="Show next image"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  )}
                  {renderGalleryDots && (
                    <div
                      className={`absolute top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-950/45 px-2.5 py-1 backdrop-blur-sm transition-opacity duration-300 sm:top-4 sm:gap-2 sm:px-3 sm:py-1.5 ${
                        showGalleryDots ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {selectedProject.gallery?.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => {
                            revealGalleryDotsTemporarily();
                            setSelectedGalleryIndex(index);
                          }}
                          className={`h-2.5 w-2.5 rounded-full transition-all ${
                            selectedGalleryIndex === index ? 'bg-white' : 'bg-white/45 hover:bg-white/70'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 transition-colors hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                aria-label="Close project details"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsImageFocusMode(true)}
                className="absolute right-3 top-12 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[10px] font-medium text-slate-800 transition-colors hover:bg-white sm:right-4 sm:top-16 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs"
                aria-label="Open focused image view"
              >
                <Expand className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Focus Image
              </button>
              <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                <Badge variant="secondary" className="inline-flex w-fit bg-white/90 px-2 py-0.5 text-[10px] text-slate-800 sm:px-2.5 sm:py-1 sm:text-xs">
                  {selectedProject.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-16 sm:left-5 sm:right-5 sm:bottom-5">
                <h3 id="project-detail-title" className="text-lg font-semibold leading-snug text-white sm:text-3xl">
                  {selectedProject.detailTitle || selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="px-5 py-5 sm:px-7 sm:py-6">
              <div className="space-y-6">
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {selectedProject.gallery[selectedGalleryIndex].phase}
                        </Badge>
                        <p className="text-base font-semibold text-slate-800">
                          {selectedProject.gallery[selectedGalleryIndex].title}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {selectedProject.gallery[selectedGalleryIndex].description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                      {selectedProject.gallery.map((item, index) => (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => setSelectedGalleryIndex(index)}
                          className={`overflow-hidden rounded-2xl border text-left transition-all ${
                            selectedGalleryIndex === index
                              ? 'border-primary shadow-[0_0_0_1px_rgba(var(--primary),0.2)]'
                              : 'border-slate-200 hover:border-primary/40'
                          }`}
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <div className="space-y-1 bg-white px-3 py-2.5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              {item.phase}
                            </p>
                            <p className="text-xs font-medium leading-5 text-slate-800">
                              {item.title}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Overview</p>
                  <p className="text-sm leading-7 text-slate-700">
                    {selectedProject.detailSummary || selectedProject.description}
                  </p>
                </div>

                {selectedProject.detailPoints && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">What It Covers</p>
                    <div className="grid gap-3">
                      {selectedProject.detailPoints.map((point) => (
                        <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.detailFeatures && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailFeatures.map((feature) => (
                        <Badge key={feature} variant="outline" className="h-auto rounded-2xl px-3 py-2 text-xs leading-5 text-slate-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.frameworks && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.frameworks.map((framework) => (
                        <Badge key={framework} variant="secondary" className="h-auto rounded-2xl bg-primary/10 px-3 py-2 text-xs text-primary">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Supporting Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((item) => (
                      <Badge key={item} variant="outline" className="h-auto rounded-2xl px-3 py-2 text-xs text-slate-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {isImageFocusMode && (
              <div className="absolute inset-0 z-30 bg-slate-950/72 backdrop-blur-[2px]" onClick={() => setIsImageFocusMode(false)}>
                <div
                  className="relative flex h-full w-full items-start justify-center p-3 pt-16 sm:p-6 sm:pt-20"
                  onClick={(event) => event.stopPropagation()}
                >
                  {hasMultipleGalleryItems && selectedGalleryIndex > 0 && (
                    <button
                      type="button"
                      onClick={showPreviousGalleryItem}
                      className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition-colors hover:bg-white sm:left-4 sm:h-12 sm:w-12"
                      aria-label="Show previous image"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  )}

                  <div className="w-full max-w-4xl">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/92 shadow-2xl">
                      <div className="flex max-h-[58vh] items-center justify-center bg-slate-950/30 p-3 sm:max-h-[65vh] sm:p-5">
                        <img
                          src={selectedProject.gallery?.[selectedGalleryIndex]?.src || selectedProject.image}
                          alt={selectedProject.gallery?.[selectedGalleryIndex]?.alt || selectedProject.title}
                          className="max-h-[50vh] w-auto max-w-full object-contain sm:max-h-[56vh]"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                        <div className="border-t border-white/10 px-4 py-4 sm:px-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary" className="bg-white/10 text-white">
                              {selectedProject.gallery[selectedGalleryIndex].phase}
                            </Badge>
                            <p className="text-base font-semibold text-white">
                              {selectedProject.gallery[selectedGalleryIndex].title}
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-200">
                            {selectedProject.gallery[selectedGalleryIndex].description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {hasMultipleGalleryItems && selectedGalleryIndex < galleryLength - 1 && (
                    <button
                      type="button"
                      onClick={showNextGalleryItem}
                      className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition-colors hover:bg-white sm:right-4 sm:h-12 sm:w-12"
                      aria-label="Show next image"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsImageFocusMode(false)}
                    className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 transition-colors hover:bg-white sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                    aria-label="Close focused image view"
                  >
                    <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
