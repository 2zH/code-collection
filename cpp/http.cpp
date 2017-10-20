#include <iostream>
#include <vector>
#include <functional>
#include <tuple>

class Router {
public:
  Router(std::string rule) {
    std::cout << rule;
  }
};

template <typename ...T> auto middleware_factories(T...factories)
{
  return std::make_tuple(factories...);
}

class Response {
public:
  std::string url;
  Router *router;
  std::vector<std::function<int()>> handles;
  void mount( const auto& func) {
    handles.push_back(func);
  }
};

class Request {
public:
  static auto& get(std::string url) {
    static Response res;
    res.url = url;
    res.router = new Router(url);
    return res;
  }
};

int main() {
  Request::get("/hello").mount([](const int& id) {
    std::cout << id;
  });
}
