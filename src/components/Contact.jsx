"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Check,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "./FAQ.css";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactFormSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));

    if (errors.service) {
      setErrors((prev) => ({
        ...prev,
        service: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Success state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      // Error state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Oops! Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Ready to Transform Your Business?</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              Have questions or need assistance? Reach out to our team and we'll
              get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3  max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-background">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      nexily.contact@nexily.xyz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+880 1784-449742</p>
                    <p className="text-muted-foreground">+88 (018) 987-65431</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">
                      House No: 11, 3rd Floor, Block: j
                      <br />
                      Road: N/52, Eastern Housing
                      <br />
                      Mirpur-12, Dhaka
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Saturday - Thursday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus.isSubmitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <Check className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-green-800">Success!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      {formStatus.message}
                    </AlertDescription>
                    <Button
                      className="mt-4"
                      variant="outline"
                      onClick={() =>
                        setFormStatus((prev) => ({
                          ...prev,
                          isSubmitted: false,
                        }))
                      }
                    >
                      Send Another Message
                    </Button>
                  </Alert>
                ) : formStatus.isError ? (
                  <Alert className="bg-red-50 border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <AlertTitle className="text-red-800">Error</AlertTitle>
                    <AlertDescription className="text-red-700">
                      {formStatus.message}
                    </AlertDescription>
                    <Button
                      className="mt-4"
                      variant="outline"
                      onClick={() =>
                        setFormStatus((prev) => ({ ...prev, isError: false }))
                      }
                    >
                      Try Again
                    </Button>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number{" "}
                          <span className="text-muted-foreground text-sm">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">
                          Company{" "}
                          <span className="text-muted-foreground text-sm">
                            (Optional)
                          </span>
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Service You're Interested In{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger
                          className={errors.service ? "border-red-500" : ""}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent
                          style={{
                            background: "hsl(221.2 83.2% 53.3%)",
                            color: "white",
                          }}
                        >
                          <SelectItem
                            value="digital-transformation"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Digital Transformation
                          </SelectItem>
                          <SelectItem
                            value="data-analytics"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Data Analytics
                          </SelectItem>
                          <SelectItem
                            value="mobile-development"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Mobile Development
                          </SelectItem>
                          <SelectItem
                            value="web-solutions"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Web Solutions
                          </SelectItem>
                          <SelectItem
                            value="cybersecurity"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Cybersecurity
                          </SelectItem>
                          <SelectItem
                            value="innovation-consulting"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Innovation Consulting
                          </SelectItem>
                          <SelectItem
                            value="other"
                            style={{
                              background: "white",
                              color: "black",
                              marginBottom: "4px",
                            }}
                          >
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-sm">{errors.service}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Your Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full md:w-auto"
                        disabled={formStatus.isSubmitting}
                        style={{
                          background: `hsl(221.2 83.2% 53.3%)`,
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {formStatus.isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to be contacted regarding your inquiry.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
