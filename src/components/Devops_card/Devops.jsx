import './Devops.css';
import DevOpsImage from '../../assets/devops.png';
import { useEffect, useRef, useState } from 'react';
import { Modal } from '@mui/material';
import ProjectCard from '../Project_Card/ProjectCard';
import TerraormProj from '../../assets/terraform-proj.png';
import K8sProj from '../../assets/k8s-proj.svg';
import AnsibleProj from '../../assets/ansible-proj.svg';


export default function Devops({ count = 50 }) {
  const cardRef = useRef(null);
  const particlesRef = useRef(null);
  const createdNodesRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const container = particlesRef.current;
    if (!card || !container) return;

    // Respect reduced motion
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let active = false;

    function createParticles() {
      if (active) return;
      active = true;
      const nodes = [];
      for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'particle';
        el.style.left = `${Math.random() * 100}%`;
        const size = 3 + Math.random() * 2;
        el.style.width = el.style.height = `${size}px`;
        el.style.background = `rgba(0,170,255,${0.35 + Math.random() * 0.6})`;
        el.style.animationDuration = `${5 + Math.random() * 3}s`;
        el.style.animationDelay = `${-Math.random() * 5}s`;
        container.appendChild(el);
        nodes.push(el);
      }
      createdNodesRef.current = nodes;
    }

    function removeParticles() {
      const nodes = createdNodesRef.current || [];
      nodes.forEach(n => n.remove());
      createdNodesRef.current = [];
      active = false;
    }

    card.addEventListener('mouseenter', createParticles);
    card.addEventListener('mouseleave', removeParticles);

    // cleanup on unmount
    return () => {
      card.removeEventListener('mouseenter', createParticles);
      card.removeEventListener('mouseleave', removeParticles);
      removeParticles();
    };
  }, [count]);

  return (
    <div ref={cardRef} className="devops-card" onClick={() => setIsVisible(true)}>
      <div ref={particlesRef} className="particles" aria-hidden="true" />
      <div className="devops-title">DevOps</div>
      <div
        style={{
          backgroundImage: `url(${DevOpsImage})`,
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          marginBottom: '10px',
        }}
      />
      <Modal open={isVisible} 
      onClose={() => setIsVisible(false)}
      onRequestClose={() => setIsVisible(false)}
      className="devops-modal"
      >


        <div className="modal-content">
          <button onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
            className='modal-button'
            >
            Close
          </button>
          <h2 >DevOps Projects ♾️</h2>
          <ProjectCard 
            title="Automated VM creation with Terraform on Proxmox"
            description="A project that automates the creation of virtual machines on Proxmox using Terraform. It includes configurations to streamline VM deployment, scaling, and maintenance."  
            imageSrc={TerraormProj}
          />
          <ProjectCard
            title="Gitlab runners inside k8s cluster"
            description="GitLab-runners helm chart deployed on k8s cluster with auto-scaling  capabilities based on workload demands."  
            imageSrc={K8sProj}
          />
          <ProjectCard
            title="Ansbiel configurations for server management"
            description="Terraform creation installed ansible ssh key and from there ansible configres each VM with users and packages."  
            imageSrc={AnsibleProj}
          />
          
        </div>
      </Modal>
    </div>
  );
}
