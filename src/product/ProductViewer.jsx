import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ProductViewer.css";

const ProductViewer = ({ selectedColor, product }) => {
  const productRef = useRef(null);
  const containerRef = useRef(null);
  const [activeView, setActiveView] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevColor, setPrevColor] = useState(selectedColor);
  const [currentImage, setCurrentImage] = useState(product?.image || "");

  // Effect to update image when product or selectedColor changes
  useEffect(() => {
    if (!product) return;

    // Find the color in product colors if available
    if (product.colors && product.colors.length > 0) {
      const colorObj = product.colors.find(c => c.name === selectedColor);
      if (colorObj && colorObj.code) {
        // If we have a color-specific image, use it
        setCurrentImage(product.image);
      }
    } else {
      // Use default product image
      setCurrentImage(product.image);
    }
  }, [product, selectedColor]);

  // Views (angles/features to showcase)
  const views = [
    {
      name: "Front",
      rotation: { x: 0, y: 0 },
      scale: 1,
      position: { x: 0, y: 0 },
    },
    {
      name: "Side",
      rotation: { x: 5, y: 30 },
      scale: 0.95,
      position: { x: -20, y: 0 },
    },
    {
      name: "Closeup",
      rotation: { x: -5, y: -10 },
      scale: 1.3,
      position: { x: 30, y: -10 },
    },
    {
      name: "Material",
      rotation: { x: 10, y: -20 },
      scale: 1.1,
      position: { x: 10, y: 20 },
    },
  ];

  // Effect for color change animation
  useEffect(() => {
    if (!productRef.current || prevColor === selectedColor) return;

    setIsAnimating(true);

    // Animation for color change
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setPrevColor(selectedColor);
      },
    });

    tl.to(productRef.current, {
      scale: 0.9,
      opacity: 0.7,
      duration: 0.3,
      ease: "power2.in",
    }).to(productRef.current, {
      scale: views[activeView].scale,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, [selectedColor, activeView, views]);

  // Initial load animation
  useEffect(() => {
    if (!productRef.current) return;

    // Set initial position
    gsap.set(productRef.current, {
      rotateX: 15,
      rotateY: -15,
      scale: 0.9,
      opacity: 0,
      y: 30,
    });

    // Animate to default position
    gsap.to(productRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      delay: 0.2,
    });

    // Add floating animation
    const floatAnimation = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    floatAnimation.to(productRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
    });

    // Clean up animation
    return () => {
      floatAnimation.kill();
    };
  }, []);

  // Handle 3D animation with GSAP
  useEffect(() => {
    if (!productRef.current || !views[activeView]) return;

    setIsAnimating(true);

    const currentView = views[activeView];

    gsap.to(productRef.current, {
      rotateX: currentView.rotation.x,
      rotateY: currentView.rotation.y,
      scale: currentView.scale,
      x: currentView.position.x,
      y: currentView.position.y,
      duration: 1.2,
      ease: "power3.out",
      onComplete: () => setIsAnimating(false),
    });
  }, [activeView, views]);

  // Mouse move effect for parallax
  useEffect(() => {
    if (!containerRef.current || !productRef.current || !views[activeView]) return;

    const container = containerRef.current;

    const handleMouseMove = (e) => {
      if (isAnimating) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(productRef.current, {
        rotateY: views[activeView].rotation.y + x * 10,
        rotateX: views[activeView].rotation.x - y * 10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeView, isAnimating, views]);

  // If no product is available
  if (!product) {
    return (
      <div className="product-viewer">
        <div className="product-not-found">Product not available</div>
      </div>
    );
  }

  return (
    <div className="product-viewer">
      <div className="product-viewer-container" ref={containerRef}>
        <div className="product-image-wrapper">
          <div className="product-images" ref={productRef}>
            <img src={product.alternateImage || product.image} alt={product.name} />
          </div>
        </div>
      </div>

      <div className="product-thumbnails">
        {views.map((view, index) => (
          <button
            key={index}
            className={`thumbnail ${activeView === index ? "active" : ""}`}
            onClick={() => !isAnimating && setActiveView(index)}
          >
            <span>{view.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductViewer;
