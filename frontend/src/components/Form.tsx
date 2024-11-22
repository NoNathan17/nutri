import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [route, setRoute] = useState<string>("/api/token/"); // Default route for login
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    if (value === "account") {
      setRoute("/api/token/"); // Set route for login
    } else if (value === "register") {
      setRoute("/api/user/register/"); // Set route for register
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      console.log({ username, password });
<<<<<<< HEAD
      console.log("Using route:", route);
=======
>>>>>>> c472d418688044a771823a42c6f20eab888c378a
      const res = await api.post(route, { username, password });
      console.log("Response:", res.data);

      if (route === "/api/token/") {
        // Login
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        localStorage.setItem("name", username);
        navigate("/");
        window.location.reload();
      } else {
<<<<<<< HEAD
        // Register
        window.location.reload();
        setRoute("/api/token/");
=======
        navigate("/login");
>>>>>>> c472d418688044a771823a42c6f20eab888c378a
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Tabs
        defaultValue="account"
        className="w-[400px]"
        onValueChange={handleTabChange} // Listen for tab changes
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Sign In Tab */}
        <TabsContent value="account">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Welcome back! Log back into your account with your information
                  below. Click sign in when you're done!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Register Tab */}
        <TabsContent value="register">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Create a new account here! @nutri allows you to save your
                  biometrics to track your personal fitness data and goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Form;
