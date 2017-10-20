#include <iostream>

using namespace std;

template <typename T> T Add(T a, T b) {
  return a + b;
}

template <typename T> class A {
public:
  static int const ID = -1;
  static int const name = 2;
};

template <> class A<int> {
public:
  static int const ID = 0;
};

int main() {
  cout << A<int>::name;
  auto api = http_api(
    GET / _get_user / _id[int()] = [] (auto p, sqlite_connection& c) {
      
    }
  )
}