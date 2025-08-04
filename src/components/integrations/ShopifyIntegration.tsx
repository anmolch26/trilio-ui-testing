import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

const ShopifyIntegration = () => {
  const requiredScopes = [
    "read_products",
    "read_product_listings", 
    "read_orders",
    "read_customers",
    "read_inventory",
    "read_analytics",
    "read_reports",
    "read_marketing_events",
    "read_fulfillments",
    "read_shipping",
    "read_discounts",
    "read_price_rules",
    "read_gift_cards",
    "read_shop_data",
    "read_checkouts",
    "read_abandoned_checkouts",
    "read_content"
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shopify Integration</h2>
        <p className="text-lg text-gray-600 mb-6">
          Connect your Shopify store to Trilio for comprehensive e-commerce analytics and insights.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Required Credentials
          </CardTitle>
          <CardDescription>
            Set up API communication with your Shopify store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Store URL</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <code className="text-sm">https://your-store.myshopify.com</code>
                  <Button size="sm" variant="ghost" onClick={() => copyToClipboard("https://your-store.myshopify.com")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Access Token</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <code className="text-sm">Private app access token</code>
                  <Button size="sm" variant="ghost" onClick={() => copyToClipboard("Private app access token")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Admin API Scopes</CardTitle>
          <CardDescription>
            Configure these permissions in your Shopify app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {requiredScopes.map((scope) => (
              <div key={scope} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{scope}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Setup Process</CardTitle>
          <CardDescription>
            Follow these steps to connect your Shopify store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">1</Badge>
              <div>
                <h4 className="font-semibold">Log in to Shopify Admin</h4>
                <p className="text-sm text-gray-600">Access your Shopify admin dashboard</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">2</Badge>
              <div>
                <h4 className="font-semibold">Navigate to Apps</h4>
                <p className="text-sm text-gray-600">Go to Settings → Apps and sales channels → Develop apps</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">3</Badge>
              <div>
                <h4 className="font-semibold">Enable Custom Apps</h4>
                <p className="text-sm text-gray-600">Enable custom apps if not already enabled</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">4</Badge>
              <div>
                <h4 className="font-semibold">Create App</h4>
                <p className="text-sm text-gray-600">Click "Create an app" to start the setup process</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">5</Badge>
              <div>
                <h4 className="font-semibold">Configure API Access</h4>
                <p className="text-sm text-gray-600">Configure Admin API access with all required scopes listed above</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">6</Badge>
              <div>
                <h4 className="font-semibold">Install App</h4>
                <p className="text-sm text-gray-600">Install the app in your store</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="mt-1">7</Badge>
              <div>
                <h4 className="font-semibold">Copy Access Token</h4>
                <p className="text-sm text-gray-600">Copy the Admin API access token for use in Trilio</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900">Important Notes</h4>
            <ul className="text-sm text-blue-800 mt-2 space-y-1">
              <li>• Ensure all required scopes are enabled for full functionality</li>
              <li>• Keep your access token secure and never share it publicly</li>
              <li>• The app requires read-only access to your store data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyIntegration; 