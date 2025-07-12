import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  FileText,
  Users,
  Download,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const TrustCenter = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "encryption"
  );

  const compliances = [
    {
      title: "GDPR",
      description: "General Data Protection Regulation compliant",
      icon: Shield,
      status: "Certified",
    },
    {
      title: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      icon: Lock,
      status: "Certified",
    },
    {
      title: "CCPA",
      description: "California Consumer Privacy Act compliant",
      icon: Users,
      status: "Compliant",
    },
    {
      title: "ISO 27001",
      description: "Information security management system",
      icon: FileText,
      status: "In Progress",
    },
  ];

  const securityPractices = {
    encryption: {
      title: "Data Encryption",
      content:
        "All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. We use industry-standard encryption protocols to ensure your data remains secure at all times.",
    },
    access: {
      title: "Access Control",
      content:
        "Multi-factor authentication (MFA) is required for all user accounts. Role-based access control (RBAC) ensures users only see data they're authorized to access. We maintain detailed audit logs of all access attempts.",
    },
    incident: {
      title: "Incident Response",
      content:
        "Our 24/7 security operations center monitors for threats continuously. We have a documented incident response plan with notification procedures and recovery protocols. Mean time to detection is under 15 minutes.",
    },
    testing: {
      title: "Penetration Testing",
      content:
        "Quarterly penetration testing by certified third-party security firms. Automated vulnerability scanning runs daily. All findings are remediated within our established SLAs based on severity.",
    },
  };

  const certifications = [
    {
      title: "SOC 2 Type II Report",
      description: "Annual security and availability audit report",
      size: "2.3 MB PDF",
    },
    {
      title: "Security Whitepaper",
      description: "Detailed overview of our security architecture",
      size: "1.8 MB PDF",
    },
    {
      title: "Privacy Policy",
      description: "Complete data processing and privacy practices",
      size: "240 KB PDF",
    },
    {
      title: "DPA Template",
      description: "Data Processing Agreement for enterprise customers",
      size: "156 KB PDF",
    },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Security & Compliance
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                You Can Rely On
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our commitment to data protection & privacy means your business
              information is secure, compliant, and always under your control.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Compliance & Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliances.map((compliance, index) => (
                <Card
                  key={compliance.title}
                  className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <compliance.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {compliance.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {compliance.description}
                    </p>
                    <Badge
                      variant={
                        compliance.status === "Certified"
                          ? "default"
                          : compliance.status === "Compliant"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        compliance.status === "Certified"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                    >
                      {compliance.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Security Practices
            </h2>
            <div className="space-y-4">
              {Object.entries(securityPractices).map(([key, practice]) => (
                <Card key={key} className="overflow-hidden">
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h3 className="text-xl font-semibold">{practice.title}</h3>
                    {expandedSection === key ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSection === key && (
                    <CardContent className="px-6 pb-6 pt-0 border-t bg-gray-50/50">
                      <p className="text-gray-600 leading-relaxed">
                        {practice.content}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Reports */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Certifications & Reports
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Download className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {cert.description}
                          </p>
                          <p className="text-xs text-gray-500">{cert.size}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 hover:border-blue-300"
                      >
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Security Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our security team is here to answer any questions about our
            practices, certifications, or compliance requirements.
          </p>
          <a href="mailto:security@trilio.ai">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Contact Security Team
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrustCenter;
