import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/context/FavoritesContext";
import TechBackground from "@/components/TechBackground";
import SplashScreen from "./pages/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import CoffeeListScreen from "./pages/CoffeeListScreen";
import CoffeeDetailScreen from "./pages/CoffeeDetailScreen";
import BrewingListScreen from "./pages/BrewingListScreen";
import BrewingDetailScreen from "./pages/BrewingDetailScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import CoffeeFactsScreen from "./pages/CoffeeFactsScreen";
import RecipesScreen from "./pages/RecipesScreen";
import ProfileScreen from "./pages/ProfileScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <TechBackground>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/coffees" element={<CoffeeListScreen />} />
              <Route path="/coffee/:id" element={<CoffeeDetailScreen />} />
              <Route path="/brewing" element={<BrewingListScreen />} />
              <Route path="/brewing/:id" element={<BrewingDetailScreen />} />
              <Route path="/favorites" element={<FavoritesScreen />} />
              <Route path="/facts" element={<CoffeeFactsScreen />} />
              <Route path="/recipes" element={<RecipesScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TechBackground>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
