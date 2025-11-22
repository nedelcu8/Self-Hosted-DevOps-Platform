import "./Carousel.css";
import Ansible from "../../assets/ansible.png";
import Docker from "../../assets/docker.png";
import K8s from "../../assets/k8s.png";
import Java from "../../assets/java.png"; 
import React from "../../assets/react.svg";
import Terraform from "../../assets/terraform.png";
import Prometheus from "../../assets/prometheus_logo.png";
import Grafana from"../../assets/grafana.png";
import Gitlab from"../../assets/gitlab.png";

const techStack = [
    { src: Ansible, alt: "Ansible" },
    { src: Docker, alt: "Docker" },
    { src: K8s, alt: "Kubernetes"},
    { src: Terraform, alt: "Terraform" },
    { src: Java, alt: "Java" },
    { src: React, alt: "React" },
    { src: Prometheus, alt: "Prometheus" },
    { src: Grafana, alt: "Grafana" },
    { src: Gitlab, alt: "GitLab CI/CD" },


];

function Carousel() {
  return (
    <div className="carousel">
        <div className="carousel-track">
            
            {techStack.map((tech, index) => (
            <img 
                key={index} 
                src={tech.src} 
                alt={tech.alt} 
                className="carousel-item" 
            />
            ))}

            {techStack.map((tech, index) => (
            <img aria-hidden="true"
                key={index} 
                src={tech.src} 
                alt={tech.alt} 
                className="carousel-item" 
            />
            ))}
            
        </div>
    </div>
  );
}

export default Carousel;